import express from "express";
import {
  authUser,
  getUserProfile,
  createUser,
} from "../controllers/user.controller";
import { verifyToken } from "../middlewares/auth";

const router = express.Router();

router.post("/login", authUser);
router.get("/profile", verifyToken, getUserProfile);
router.post("/", createUser);

export { router as userRouter };
