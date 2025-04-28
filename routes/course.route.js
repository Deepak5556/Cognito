import express from "express";
import {
  fetchModule,
  fetchModules,
  getAllCourses,
  getSingleCourse,
} from "../controllers/course.controller.js";
import { isAuth } from "../middleware/isAuth.js";
import {
  checkout,
  getMyCourses,
  paymentVerfication,
} from "../controllers/admin.controller.js";

const router = express.Router();

// router.get("/course/all", getAllCourses);
// router.get("/course/:id", getSingleCourse);
// router.get("/modules/:id", isAuth, fetchModules);
// router.get("/module/:id", isAuth, fetchModule);
// router.get("/mycourse", isAuth, getMyCourses);
// router.post("/course/checkout/:id", isAuth, checkout);
// router.post("/verification/:id", isAuth, paymentVerfication);

router.get("/course/all", getAllCourses);
router.get("/course/:id", getSingleCourse);
router.get("/modules/:id", isAuth, fetchModules);
router.get("/module/:id", isAuth, fetchModule);
router.get("/mycourse", isAuth, getMyCourses);
router.post("/course/checkout/:id", isAuth, checkout);
router.post("/verification/:id", isAuth, paymentVerfication);
router.get("/razorpay-key", (req, res) => {
  res.status(200).json({ key: process.env.Razorpay_Key });
});

export default router;
