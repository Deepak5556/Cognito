import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/db.js";
import userRouter from "../backend/routes/user.router.js";


dotenv.config();

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Server is Working");
});


//using routes
app.use("/api", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${process.env.PORT}`);
  connectDB();
});
