import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import Product from "../model/product.model";
import { IProduct } from "../interface";

export const getAllProducts = asyncHandler(
  async (req: Request, res: Response) => {
    const products: IProduct[] = await Product.find();
    res.status(200).json(products);
  }
);

export const getProduct = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const product: IProduct | null = await Product.findById(req.params.id);
    res.status(200).json(product);
  }
);
