
import Razorpay from "razorpay";
import crypto from "crypto";
import { Payment } from "../models/Payment.js";
import { User } from "../models/User.js";
import { Courses } from "../models/Course.js";
import { Progress } from "../models/Progress.js";
import TryCatch from "../middlewares/TryCatch.js";

const instance = new Razorpay({
  key_id: process.env.Razorpay_Key,
  key_secret: process.env.Razorpay_Secret,
});

export const createCheckoutSession = TryCatch(async (req, res) => {
  const course = await Courses.findById(req.params.id);
  if (!course) return res.status(404).json({ message: "Course not found" });

  const options = {
    amount: Number(course.price) * 100,
    currency: "INR",
    receipt: `rcpt_${Date.now()}`,
  };

  const order = await instance.orders.create(options);
  res.status(200).json({ order });
});

export const getRazorpayKey = TryCatch(async (req, res) => {
  res.status(200).json({ key: process.env.Razorpay_Key });
});

export const paymentVerification = TryCatch(async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const body = `${razorpay_order_id}|${razorpay_payment_id}`;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.Razorpay_Secret)
    .update(body)
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (!isAuthentic) {
    return res.status(400).json({ message: "Payment Failed" });
  }

  await Payment.create({ razorpay_order_id, razorpay_payment_id, razorpay_signature });

  const user = await User.findById(req.user._id);
  const course = await Courses.findById(req.params.id);

  if (!user.subscription.includes(course._id)) {
    user.subscription.push(course._id);
  }

  await Progress.create({
    course: course._id,
    completedLectures: [],
    user: req.user._id,
  });

  await user.save();

  res.status(200).json({ message: "Course Purchased Successfully" });
});
