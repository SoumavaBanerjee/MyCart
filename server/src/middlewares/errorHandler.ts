import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import HttpException from "../exceptions/httpException";
export const errorHandler: ErrorRequestHandler = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const statusCode = response.statusCode === 200 ? 500 : response.statusCode;

  if (process.env.NODE_ENV === "dev") console.log(error);
  response.status(statusCode).json({ message: error.message });
};
