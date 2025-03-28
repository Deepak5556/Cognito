import express from "express";
import {
  fetchModule,
  fetchModules,
  getAllCourses,
  getSingleCourse,
} from "../controllers/course.controller.js";
import { isAuth } from "../middleware/isAuth.js";

const router = express.Router();

router.get("/course/all", getAllCourses);
router.get("/course/:id", getSingleCourse);
router.get("/modules/:id",isAuth,fetchModules)
router.get("/module/:id",isAuth,fetchModule)
export default router;
