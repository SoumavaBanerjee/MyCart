import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import Product from "../model/product.model";
import { IProduct } from "../interface";

/**
 * @description  get all product
 * @route PUT /api/products/
 * @public
 */
export const getAllProducts = asyncHandler(
  async (req: Request, res: Response) => {
    const products: IProduct[] = await Product.find();
    // for testing. turn it off in prod
    // throw new Error("Something went wrong");
    res.status(200).json(products);
  }
);

/**
 * @description  get single product
 * @route PUT /api/products/:id
 * @public
 */

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

/**
 * @description  get single product
 * @route POST /api/products
 * @admin
 */
export const createProduct = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const product: IProduct = new Product({
      user: req.user?._id,
      name: "Sample Product",
      image: "/images/sample.jpg",
      description: "Sample Description",
      brand: "dummy brand",
      category: "dummy cat",
      price: 0,
      countInStock: 0,
      rating: 1,
      numReviews: 1,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  }
);
/**
 * @description  update a product
 * @route PUT /api/products/:id
 * @admin
 */
export const updateProduct = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const product: IProduct | null = await Product.findById(req.params.id);

    if (product) {
      product.name = req.body.name || product.name;
      product.description = req.body.description || product.description;
      product.image = req.body.image || product.image;
      product.price = req.body.price || product.price;
      product.countInStock = req.body.countInStock || product.countInStock;
      product.brand = req.body.brand || product.brand;
      product.category = req.body.category || product.category;

      const updatedProduct = await product.save();
      res.send(updatedProduct);
    } else {
      res.status(404);
      throw new Error("No Product found");
    }
  }
);
