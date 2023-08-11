import express from "express";
import cors from "cors";

import userRouter from "./routes/userRoute.js";
import noteRouter from "./routes/noteRoute.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Happy coding!",
  });
});

app.use("/api/users/", userRouter);
app.use("/api/notes/", noteRouter);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `requested route ${req.originalUrl} does not exist on this server!`,
  });
});

export default app;
