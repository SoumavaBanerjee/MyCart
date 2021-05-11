import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import Product from "../model/product.model";
import { IProduct } from "../interface";

export const getAllProducts = asyncHandler(
  async (req: Request, res: Response) => {
    const products: IProduct[] = await Product.find();
    throw new Error("Something went wrong");
    // res.status(200).json(products);
  }
);

export const getProduct = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const product: IProduct | null = await Product.findById(req.params.id);
    if (!product) {
      res.status(404);
      throw new Error("resource not found");
    }

    res.status(200).json(product);
  }
);
