import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import * as dotenv from "dotenv";

import { connectDB, connectLocalDB } from "./config/db";
import { homeRouter, productRouter, userRouter, orderRouter } from "./routes/";
import { errorHandler, notFoundHandler } from "./middlewares/";

dotenv.config();

process.env.NODE_ENV === "dev" ? connectLocalDB() : connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
const environment = process.env.NODE_ENV || "dev";

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// don't use morgan while testing
if (process.env.NODE_ENV !== "test") app.use(morgan("dev"));

// api endpoints
app.use(homeRouter);
app.use("/api", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

// endpoint to send payment environment variables to frontend
app.get("/api/config/paypal", (req: Request, res: Response) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

// error handling middlewares
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => {
  console.info(`app running on ${environment} mode at port ${PORT} `);
});

export default app;
