import express from "express";
import { isAdmin, isAuth } from "../middleware/isAuth.js";
import {
  addModule,
  createCourse,
  deleteCourse,
  deleteModule,
} from "../controllers/admin.controller.js";
import { uploadFiles } from "../middleware/multer.js";

const router = express.Router();
router.post("/course/new", isAuth, isAdmin, uploadFiles, createCourse);
router.post("/course/:id", isAuth, isAdmin, uploadFiles, addModule);
router.delete("/module/:id", isAuth, isAdmin, deleteModule);
router.delete("/course/:id", isAuth, isAdmin, deleteCourse);

export default router;
