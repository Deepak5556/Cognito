import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendMail from "../middleware/sendMail.js";

export const register = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    if (!email || !name || !password) {
      console.log("fields are missing");
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User Already Exists" });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });

    await newUser.save();

    const otp = Math.floor(100000 + Math.random() * 900000);

    const activationToken = jwt.sign(
      {
        user: {
          name: newUser.name,
          email: newUser.email,
          password: newUser.password,
        },
        otp,
      },
      process.env.Activation_Secret,
      { expiresIn: "5m" }
    );

    const data = {
      name,
      otp,
    };

    await sendMail(email, "Cognito", data);

    return res.status(200).json({
      message: "OTP Sent to Your Mail",
      activationToken,
    });
  } catch (error) {
    console.log(error.message);

    return res.status(500).json({
      message: error.message,
    });
  }
};
