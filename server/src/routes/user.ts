import express from "express";
import {
  authUser,
  getUserProfile,
  createUser,
  updateUserProfile,
} from "../controllers/user.controller";
import { verifyToken } from "../middlewares/auth";

const router = express.Router();

router.post("/login", authUser);
router.get("/profile", verifyToken, getUserProfile);
router.put("/profile", verifyToken, updateUserProfile);
router.post("/", createUser);

export { router as userRouter };
