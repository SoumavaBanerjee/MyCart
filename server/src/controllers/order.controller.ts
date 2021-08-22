import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import { IOrder, IUser } from "../interface";
import asyncHandler from "express-async-handler";
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

  // console.log(orderItems);

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

/**
 * @description get single order details from user
 * @route GET /api/orders/:id
 * @private
 */
export const getOrderById = asyncHandler(
  async (req: Request, res: Response) => {
    const order: IOrder | Pick<IUser, "name" | "email"> | null =
      await Order.findById(req.params.id).populate("user", "name email");

    if (!order) {
      res.status(404);
      throw new Error("No order found");
    }

    res.status(200).send(order);
  }
);

/**
 * @description update order status to paid
 * @route PUT /api/orders/:id/pay
 * @private
 */

export const updateOrderToPaid = asyncHandler(
  async (req: Request, res: Response) => {
    const order: IOrder | null = await Order.findById(req.params.id);

    if (!order) {
      res.status(404);
      throw new Error("No order found");
    }

    order.isPaid = true;
    order.paidAt = new Date(Date.now());
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      emailAddress: req.body.payer.email_address,
      updateTime: req.body.update_time,
    };

    const updatedOrder = await order.save();
    res.status(200).send(updatedOrder);
  }
);

/**
 * @description get all orders of user
 * @route GET /api/orders/userOrderList
 * @private
 */
export const getUserOrders = asyncHandler(
  async (req: Request, res: Response) => {
    const orderList: IOrder[] | null = await Order.find({
      user: req.user?._id,
    });

    if (!orderList) {
      res.status(404);
      throw new Error("No orders found");
    }

    res.status(200).send(orderList);
  }
);
