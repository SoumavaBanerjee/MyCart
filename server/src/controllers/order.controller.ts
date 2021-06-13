import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { IOrder } from "../interface";
import Order from "../model/order.model";

/**
 * @description save orders from user
 * @route POST /api/orders
 * @private
 */
export const saveOrders = asyncHandler(async (req: Request, res: Response) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    shippingPrice,
    taxPrice,
    totalPrice,
  }: IOrder = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items found");
  } else {
    const order = new Order({
      user: req.user?._id,
      orderItems,
      shippingAddress,
      shippingPrice,
      paymentMethod,
      taxPrice,
      totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201).send(createdOrder);
  }
});
