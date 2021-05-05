import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { homeRouter, productRouter } from "./routes/";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api endpoints
app.use(homeRouter);
app.use("/api/", productRouter);

app.listen(5000, () => {
  console.info("app running on port " + PORT);
});
