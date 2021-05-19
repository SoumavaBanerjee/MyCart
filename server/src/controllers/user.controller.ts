import { Request, Response, NextFunction } from "express";
import generateToken from "../utils/generateJwt";
import asyncHandler from "express-async-handler";
import User from "../model/user.model";
import { IUserDoc } from "../interface";

/**
 * @description authenticate users and get auth token
 *
 */

export const authUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password }: IUserDoc = req.body;
  const user: IUserDoc | null = await User.findOne({ email: email });

  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("email or password is incorrect");
  }
});

export const getUserProfile = asyncHandler(
  async (req: Request, res: Response) => {
    res.send("success");
  }
);
