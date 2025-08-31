import express from "express";
const app = express();
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";
import messageRoute from "./routes/messageRoute.js";
import { connectDB } from "./lib/mongoDb.js";
import cookieParser from "cookie-parser";
import cors from "cors";
//config
dotenv.config();
//middleware
app.use(cookieParser());
app.use(express.json({ limit: "10mb", extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.get("/api/auth", (req, res) => {
  res.send("Auth API");
});
//routes
app.use("/api/auth", authRoute);
app.use("/api/message", messageRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
  connectDB();
});
