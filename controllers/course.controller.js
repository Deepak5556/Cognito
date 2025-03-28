import TryCatch from "../middleware/TryCatch.js";
import { Courses } from "../models/course.model.js";
export const getAllCourses = TryCatch(async (req, res) => {
  const courses = await Courses.find();
  res.json({
    courses,
  });
});

export const getSingleCourse = TryCatch(async (req, res) => {
  const course = await Courses.findById(req.param.id);
  res.json({
    course,
  });
});
