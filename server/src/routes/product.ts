import express from "express";
import { getAllProducts, getProduct } from "../controllers/product.controller";

const router = express.Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProduct);

export { router as productRouter };
