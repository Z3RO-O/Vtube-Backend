import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// for parsing application/json and limit is set to prevent DOS attack
app.use(
  express.json({
    limit: "16kb",
  })
);

// for parsing application/x-www-form-urlencoded or URL-encoded data which converts space and other special chars
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// for storing files to keep them accessible to anyone
app.use(express.static("public"));

// for CRUD operations in cookies of users securely
app.use(cookieParser());

// routes import
import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);
// Sample URL : http://localhost:5000/api/v1/users/register

export { app };
