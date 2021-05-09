import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import * as dotenv from "dotenv";

import { connectDB, connectLocalDB } from "./config/db";
import { homeRouter, productRouter } from "./routes/";

dotenv.config();
process.env.NODE_ENV === "test" ? connectLocalDB() : connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
const environment = process.env.NODE_ENV || "development";

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// don't use morgan while testing
if (process.env.NODE_ENV !== "test") app.use(morgan("dev"));

// api endpoints
app.use(homeRouter);
app.use("/api", productRouter);

app.listen(5000, () => {
  console.info(`app running on ${environment} mode at port ${PORT} `);
});

export default app;
