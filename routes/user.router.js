import express from "express";
import { register, verifyUser } from "../controllers/user.controller.js";

const router = express.Router();
router.post("/verify", verifyUser);
router.post("/user/register", register);
export default router;