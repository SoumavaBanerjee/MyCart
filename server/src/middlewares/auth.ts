import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../model/user.model";
import asyncHandler from "express-async-handler";
import { IUserDoc, IUser } from "../interface";

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}
export const verifyToken = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers.authorization;
    console.log(token);
    if (!(token || token?.startsWith("Bearer"))) {
      res.status(401);
      throw new Error("Unauthorized request: token not found");
    }
    try {
      token = token.split(" ")[1];
      if (!token || token === null) {
        res.status(401);
        throw new Error("Unauthorized request: bearer token invalid");
      }

      let verifiedUser = jwt.verify(token, process.env.JWT_SECRET!);
      if (!verifiedUser) {
        res.status(401);
        throw new Error("Unauthorized request: user doesn't exist");
      }

      const { id } = verifiedUser as TokenPayload;
      const userDetails: IUser | null = await User.findById(id).select(
        "-password"
      );

      if (!userDetails) {
        res.status(404);
        throw new Error("User not found");
      }

      req.user = userDetails;

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Unauthorized request: token not found");
    }
  }
);
