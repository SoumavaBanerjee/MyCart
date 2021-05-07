import mongoose, { Schema } from "mongoose";
import { IOrder } from "../interface";

const OrderSchema: Schema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      requried: true,
      ref: "User",
    },
    orderedItems: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true, default: 0 },
        image: { type: String, required: true },
        price: { type: Number, default: 0, required: true },
        product: {
          type: mongoose.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
    shippingAddress: {
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      postalCode: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String, required: true },
      status: { type: String, required: true },
      updateTime: { type: String, required: true },
      emailAddress: { type: String, required: true },
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model<IOrder>("Order", OrderSchema);
export default Order;
