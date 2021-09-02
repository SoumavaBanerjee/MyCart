import express from "express";
import {
  authUser,
  getUserProfile,
  createUser,
  updateUserProfile,
  getUsers,
  getUserAndUpdate,
  getUserById,
  removeUser,
} from "../controllers/user.controller";
import { verifyToken, isAdmin } from "../middlewares/auth";

const router = express.Router();

router.route("/").post(createUser).get(verifyToken, isAdmin, getUsers);
router.post("/login", authUser);
router
  .route("/profile")
  .get(verifyToken, getUserProfile)
  .put(verifyToken, updateUserProfile);
router;
router
  .route("/:id")
  .put(verifyToken, isAdmin, getUserAndUpdate)
  .delete(verifyToken, isAdmin, removeUser)
  .get(verifyToken, isAdmin, getUserById);

export { router as userRouter };
