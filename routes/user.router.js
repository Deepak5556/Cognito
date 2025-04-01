import express from "express";
import {
  loginUser,
  myProfile,
  register,
  verifyUser,
} from "../controllers/user.controller.js";
import { isAuth } from "../middleware/isAuth.js";

const router = express.Router();
router.post("/user/verify", verifyUser);
router.post("/user/register", register);
router.post("/user/login", loginUser);
router.get("/user/me" ,isAuth, myProfile);


export default router;
