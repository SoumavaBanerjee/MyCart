import express from "express";
import { saveOrders } from "../controllers/order.controller";
import { verifyToken } from "../middlewares/auth";

const router = express.Router();

router.post("/", verifyToken, saveOrders);

export { router as orderRouter };
