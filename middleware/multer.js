import multer from "multer";
import { v4 as uuid } from "uuid";
import path from "path";

// Allowed file types (images & videos)
const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "video/mp4",
    "video/mkv",
    "video/webm",
  ];

  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true); // Accept file
  } else {
    cb(new Error("Invalid file type! Only images and videos are allowed."), false);
  }
};

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads"); // Save files in "uploads" directory
  },
  filename(req, file, cb) {
    const id = uuid();
    const ext = path.extname(file.originalname);
    cb(null, `${id}${ext}`);
  },
});

export const uploadFiles = multer({
  storage,
  fileFilter,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB max file size
}).fields([
  { name: "image", maxCount: 1 }, // For course image
  { name: "video", maxCount: 1 }, // For module video
]);