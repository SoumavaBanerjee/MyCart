import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import User from "../model/user.model";
import { IUser } from "../interface";

/**
 * @description authenticate users and get auth token
 *
 */

// for test. revert later
export const authUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password }: IUser = req.body;
  const user: IUser | null = await User.findOne({ email: email });

  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null,
    });
  } else {
    res.status(401);
    throw new Error("email or password is incorrect");
  }
});
