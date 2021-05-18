import express from "express";
import { authUser, getUserProfile } from "../controllers/user.controller";

const router = express.Router();

router.post("/login", authUser);
router.get("/profile", getUserProfile);

export { router as userRouter };
