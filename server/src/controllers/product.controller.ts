import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import Product from "../model/product.model";
import { IProduct } from "../interface";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products: IProduct[] = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
};

export const getProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product: IProduct | null = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error });
  }
};
