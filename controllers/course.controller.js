import TryCatch from "../middleware/TryCatch.js";
import { Courses } from "../models/course.model.js";
import { Modules } from "../models/moules.models.js";
import { User } from "../models/user.model.js";

export const getAllCourses = TryCatch(async (req, res) => {
  const courses = await Courses.find();
  res.json({ courses });
});

export const getSingleCourse = TryCatch(async (req, res) => {
  const course = await Courses.findById(req.params.id);
  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }
  res.json({ course });
});

export const fetchModules = TryCatch(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const modules = await Modules.find({ course: req.params.id });

  if (user.role === "admin") {
    return res.json({ modules });
  }

  if (!user.subscription.includes(req.params.id)) {
    return res.status(400).json({
      message: "You are not subscribed to this course",
    });
  }

  res.json({ modules });
});

export const fetchModule = TryCatch(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const module = await Modules.findById(req.params.id);
  if (!module) {
    return res.status(404).json({ message: "Module not found" });
  }

  if (user.role === "admin") {
    return res.json({ module });
  }

  if (!user.subscription.includes(module.course.toString())) {
    return res.status(400).json({
      message: "You are not subscribed to this course",
    });
  }

  res.json({ module });
});

 