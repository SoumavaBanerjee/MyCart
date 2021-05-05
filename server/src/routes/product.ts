import express, { Request, Response, NextFunction } from "express";
import mockProducts from "../data/mock-products";

const router = express.Router();

router.get("/products", (req: Request, res: Response, next: NextFunction) => {
  return res.json(mockProducts);
});

router.get(
  "/products/:id",
  (req: Request, res: Response, next: NextFunction) => {
    const product = mockProducts.find(
      (product) => product._id === req.params.id
    );
    return res.json(product);
  }
);

export { router as productRouter };
