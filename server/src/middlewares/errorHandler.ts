import { Request, Response, NextFunction } from "express";
import HttpException from "../exceptions/httpException";
export const errorHandler = (
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const status = 500;
  if (process.env.NODE_ENV === "development") console.log(error);
  response.status(500).send(error);
};
