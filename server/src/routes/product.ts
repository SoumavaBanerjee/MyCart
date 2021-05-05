import express, { Request, Response, NextFunction } from "express";
import mockProducts from "../data/mock-products";

const router = express.Router();

router.get("/products", (req: Request, res: Response, next: NextFunction) => {
  return res.json(mockProducts);
});

export { router as productRouter };
