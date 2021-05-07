import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import * as dotenv from "dotenv";

import connectDB from "./config/db";
import { homeRouter, productRouter } from "./routes/";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
const environment = process.env.NODE_ENV || "development";

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api endpoints
app.use(homeRouter);
app.use("/api", productRouter);

app.listen(5000, () => {
  console.info(`app running on ${environment} mode at port ${PORT} `);
});
