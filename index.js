import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/db.js";
import userRouter from "./routes/user.router.js";
import courseRouter from "./routes/course.route.js";
import adminRouter from "./routes/admin.route.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/uploads", express.static("uploads")); // Serve uploaded files

// Routes
app.use("/api", userRouter);
app.use("/api", courseRouter);
app.use("/api", adminRouter);

// Test Route
app.get("/", (req, res) => {
  res.send("Server is Working");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
  connectDB();
});
