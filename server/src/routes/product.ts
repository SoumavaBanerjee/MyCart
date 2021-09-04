import express from "express";
import {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
} from "../controllers/product.controller";
import { isAdmin, verifyToken } from "../middlewares/auth";

const router = express.Router();

router
  .route("/products")
  .get(getAllProducts)
  .post(verifyToken, isAdmin, createProduct);
router
  .route("/products/:id")
  .get(getProduct)
  .put(verifyToken, isAdmin, updateProduct);

export { router as productRouter };
