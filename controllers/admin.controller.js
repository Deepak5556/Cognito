import { instance } from "../index.js";
import TryCatch from "../middleware/TryCatch.js";
import { Courses } from "../models/course.model.js";
import { Modules } from "../models/moules.models.js";
import { rm } from "fs";
import { promisify } from "util";
import fs from "fs";
import crypto from "crypto";
import { User } from "../models/user.model.js";
import { Payment } from "../models/payment.model.js";

export const createCourse = TryCatch(async (req, res) => {
  const { title, description, category, createdBy, duration, price } = req.body;

  const image = req.files?.image?.[0];

  await Courses.create({
    title,
    description,
    category,
    createdBy,
    image: image ? image.path : null,
    duration,
    price,
  });

  res.status(201).json({
    message: "Course Created Successfully",
  });
});

export const addModule = TryCatch(async (req, res) => {
  const course = await Courses.findById(req.params.id);

  if (!course)
    return res.status(404).json({
      message: "No Courses with this id",
    });

  const { title, description } = req.body;

  const video = req.files?.video?.[0];

  const module = await Modules.create({
    title,
    description,
    video: video ? video.path : null,
    course: course._id,
  });

  res.status(201).json({
    message: "Modules Added",
    module,
  });
});

export const deleteModule = TryCatch(async (req, res) => {
  const module = await Modules.findById(req.params.id);
  rm(module.video, () => {
    console.log("Video Deleted");
  });
  await module.deleteOne();
  res.json({
    message: "Module Deleted",
  });
});
const unlinkAsync = promisify(fs.unlink);

export const deleteCourse = TryCatch(async (req, res) => {
  const course = await Courses.findById(req.params.id);

  const modules = await Modules.find({ course: course._id });

  await Promise.all(
    modules.map(async (module) => {
      await unlinkAsync(module.video);
      console.log("Video Deleted");
    })
  );

  rm(course.image, () => {
    console.log("Image Deleted");
  });

  await Modules.find({ course: req.params.id }).deleteMany();

  await course.deleteOne();

  await User.updateMany({}, { $pull: { subscription: req.params.id } });

  res.json({
    message: "Course Deleted",
  });
});

export const getAllStats = TryCatch(async (req, res) => {
  const totalCourses = (await Courses.find()).length;
  const totalModules = (await Modules.find()).length;
  const totalUser = (await User.find()).length;

  const stats = {
    totalCourses,
    totalModules,
    totalUser,
  };

  res.json({
    stats,
  });
});

export const getMyCourses = TryCatch(async (req, res) => {
  const courses = await Courses.find({ _id: req.user.subscription });
  res.json({
    courses,
  });
});
export const checkout = TryCatch(async (req, res) => {
  const user = await User.findById(req.user._id);
  const course = await Courses.findById(req.params.id);

  if (user.subscription.includes(course._id)) {
    return res.status(400).json({
      message: "You already have this Course",
    });
  }

  const options = {
    amount: Number(course.price * 100),
    currency: "INR",
  };

  const order = await instance.order.create(options);

  res.status(201).json({
    order,
    course,
  });
});

export const paymentVerfication = TryCatch(async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.Razorpay_Secret)
    .update(body)
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    const user = await User.findById(req.user._id);

    const course = await Courses.findById(req.params.id);

    user.subscription.push(course._id);

    await user.save();

    res.status(200).json({
      message: "Course purchased Successfully",
    });
  } else {
    return res.status(404).json({
      message: "Payment Failed",
    });
  }
});
