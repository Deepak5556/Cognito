import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    requires: true,
  },
  description: {
    type: String,
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Courses",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Modules = mongoose.model("Module", schema);
