import express from "express";
import { authUser } from "../controllers/user.controller";

const router = express.Router();

router.post("/login", authUser);

export { router as userRouter };
