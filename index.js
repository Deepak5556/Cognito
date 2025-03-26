import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/db.js";

dotenv.config();

const app = express();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Server is Working");
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
  connectDB();
});
