import express from "express";
import {
  fetchModule,
  fetchModules,
  getAllCourses,
  getSingleCourse,
} from "../controllers/course.controller.js";
import { isAuth } from "../middleware/isAuth.js";
import { getMyCourses } from "../controllers/admin.controller.js";

const router = express.Router();

router.get("/course/all", getAllCourses);
router.get("/course/:id", getSingleCourse);
router.get("/modules/:id", isAuth, fetchModules);
router.get("/module/:id", isAuth, fetchModule);
router.get("/mycourse", isAuth, getMyCourses);
export default router;
