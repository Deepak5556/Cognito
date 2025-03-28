import TryCatch from "../middleware/TryCatch.js";
import { Courses } from "../models/course.model.js";
import { Modules } from "../models/moules.models.js";

export const createCourse = TryCatch(async (req, res) => {
  const { title, description, category, createdBy, duration, price } = req.body;

  const image = req.files?.image?.[0];

  await Courses.create({
    title,
    description,
    category,
    createdBy,
    image: image ? image.path : null,
    duration,
    price,
  });

  res.status(201).json({
    message: "Course Created Successfully",
  });
});

export const addModule = TryCatch(async (req, res) => {
  const course = await Courses.findById(req.params.id);

  if (!course)
    return res.status(404).json({
      message: "No Courses with this id",
    });

  const { title, description } = req.body;

  const video = req.files?.video?.[0];

  const module = await Modules.create({
    title,
    description,
    video: video ? video.path : null,
    course: course._id,
  });

  res.status(201).json({
    message: "Modules Added",
    module,
  });
});
