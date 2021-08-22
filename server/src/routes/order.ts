import express from "express";
import {
  saveOrders,
  getOrderById,
  updateOrderToPaid,
  getUserOrders,
} from "../controllers/order.controller";
import { verifyToken } from "../middlewares/auth";

const router = express.Router();

router.post("/", verifyToken, saveOrders);
router.get("/userOrderList", verifyToken, getUserOrders);
router.get("/:id", verifyToken, getOrderById);
router.put("/:id/pay", verifyToken, updateOrderToPaid);

export { router as orderRouter };
