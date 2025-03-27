import dotenv from "dotenv";
dotenv.config();
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendMail from "../middleware/sendMail.js";
import TryCatch from "../middleware/TryCatch.js";

export const register = TryCatch(async (req, res) => {
  const { email, name, password } = req.body;
  const Secret = "hbahdfbj256";
  let user = await User.findOne({ email });

  if (user)
    return res.status(400).json({
      message: "User Already exists",
    });

  const hashPassword = await bcrypt.hash(password, 10);

  user = {
    name,
    email,
    password: hashPassword,
  };

  const otp = Math.floor(Math.random() * 1000000);

  const activationToken = jwt.sign(
    {
      user,
      otp,
    },
    Secret,
    {
      expiresIn: "5m",
    }
  );

  const data = {
    name,
    otp,
  };

  await sendMail(email, "Cognito", data);

  res.status(200).json({
    message: "Otp send to your mail",
    activationToken,
  });
});

export const verifyUser = TryCatch(async (req, res) => {
  const { otp, activationToken } = req.body;

  const verify = jwt.verify(activationToken, "hbahdfbj256");

  if (!verify)
    return res.status(400).json({
      message: "Otp Expired",
    });

  if (verify.otp !== otp)
    return res.status(400).json({
      message: "Wrong Otp",
    });

  await User.create({
    name: verify.user.name,
    email: verify.user.email,
    password: verify.user.password,
  });

  res.json({
    message: "User Registered",
  });
});

export const loginUser = TryCatch(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "User Not Found ",
    });
  }
  const matchPassword = await bcrypt.compare(password, user.password);
  if (!matchPassword) {
    return res.status(400).json({
      message: "Password Invalid",
    });
  }

  const token = jwt.sign(
    {
      _id: user._id,
    },
    process.env.JWT_Sec,
    {
      expiresIn: "15d",
    }
  );

  res.json({
    message: `Welcome back ${user.name}`,
    token,
    user,
  });
});

export const myProfile = TryCatch(async (req, res) => {
  const user = await User.findById(req.user._id);

  res.json({user});
});
