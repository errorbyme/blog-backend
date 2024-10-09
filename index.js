import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import blogRouter from "./routes/blog.js";
import commentRouter from "./routes/comment.js";
import cookieParser from "cookie-parser";
import path from "path";

const app = express();
// Pq3KOOoER9mmKK8d
mongoose
  .connect(
    "mongodb+srv://blog-user:Pq3KOOoER9mmKK8d@cluster0.audua.mongodb.net/"
  )
  .then(() => console.log("Connected to DB"));
const PORT = process.env.PORT || 9999;

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.resolve("./public")));

app.use(userRouter);
app.use(blogRouter);
app.use(commentRouter);

app.get("/", (req, res) => {
  res.end("Hey server");
});
app.listen(PORT, () => console.log("Server started at", PORT));

// mongodb+srv://blog:HJdsIuc1rIYd5bjq@cluster0.audua.mongodb.net/
