import express from "express";
import { saveOrders, getOrderById } from "../controllers/order.controller";
import { verifyToken } from "../middlewares/auth";

const router = express.Router();

router.post("/", verifyToken, saveOrders);
router.get("/:id", verifyToken, getOrderById);

export { router as orderRouter };
