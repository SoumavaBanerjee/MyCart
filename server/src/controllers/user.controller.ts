import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import generateToken from "../utils/generateJwt";
import asyncHandler from "express-async-handler";
import User from "../model/user.model";
import { IUserDoc } from "../interface";

/**
 * @description authenticate existing users and get auth token
 * @route GET /api/users/login
 * @public
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
      token: generateToken(user._id as string),
    });
  } else {
    res.status(401);
    throw new Error("email or password is invalid");
  }
});

/**
 * @description register a new user
 * @route POST /api/users/
 * @public
 */
export const createUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, password, email }: IUserDoc = req.body;
  const user: IUserDoc | null = await User.findOne({ email: email });

  if (user) {
    res.status(401);
    throw new Error("User already exists");
  }

  const newUser = await User.create({
    name,
    email,
    password,
  });

  // send auth token as well

  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token: generateToken(newUser._id as string),
    });
  } else {
    res.status(400);
    throw new Error("Unable to create user");
  }
});

/**
 * @description get profile of pre existing users
 * @route GET /api/users/profile
 * @private
 */
export const getUserProfile = asyncHandler(
  async (req: Request, res: Response) => {
    const user = await User.findById(req.user?._id);
    if (user) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(404);
      throw new Error("user not found");
    }
  }
);

/**
 * @description update profile of existing user\
 * @route PUT /api/users/profile
 * @private
 */

export const updateUserProfile = asyncHandler(
  async (req: Request, res: Response) => {
    const user = await User.findById(req.user?._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = req.body.password;
      }
      const updatedUser = await user.save();
      res.status(200).json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser._id as string),
      });
    } else {
      res.status(404);
      throw new Error("user not found");
    }
  }
);

/**
 * @description get list of all users
 * @route GET /api/users/
 * @private admin
 */

export const getUsers = asyncHandler(async (req: Request, res: Response) => {
  const userList: IUserDoc[] = await User.find().select("-password");
  if (userList) {
    res.status(200).send(userList);
  } else {
    res.status(404);

    // change error to proper response later
    throw new Error("user not found");
  }
});

/**
 * @description get user by id
 * @route GET /api/users/:id
 * @private admin
 */

export const getUserById = asyncHandler(async (req: Request, res: Response) => {
  const user: IUserDoc | null = await User.findById(req.params.id).select(
    "-password"
  );
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404);
    throw new Error("user not found");
  }
});

/**
 * @description delete user
 * @route DELETE /api/users/:id
 * @private admin
 */

export const removeUser = asyncHandler(async (req: Request, res: Response) => {
  const user: IUserDoc | null = await User.findById(req.params.id);
  if (user) {
    const deletedUser: IUserDoc | null = await User.findByIdAndDelete(user._id);
    res.status(200).send(deletedUser);
  } else {
    res.status(404);
    throw new Error("user not found");
  }
});

/**
 * @description update user by id
 * @route PUT /api/users/:id
 * @private admin
 */

export const getUserAndUpdate = asyncHandler(
  async (req: Request, res: Response) => {
    const user: IUserDoc | null = await User.findById(req.params.id).select(
      "-password"
    );
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.isAdmin = req.body.isAdmin;

      await user.save();
      res.status(204).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(404);
      throw new Error("user not found");
    }
  }
);
