import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import HttpException from "../exceptions/httpException";
export const errorHandler: ErrorRequestHandler = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const statusCode = response.statusCode || 500;

  if (process.env.NODE_ENV === "development") console.log(error);
  response.status(statusCode).send({ message: error.message });
};
