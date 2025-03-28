import multer from "multer";
import { v4 as uuid } from "uuid";
import path from "path";

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
    cb(null, true); 
  } else {
    cb(new Error("Invalid file type! Only images and videos are allowed."), false);
  }
};

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads"); 
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
  limits: { fileSize: 80 * 1024 * 1024 }, 
}).fields([
  { name: "image", maxCount: 1 }, 
  { name: "video", maxCount: 1 }, 
]);