import { Document } from "mongoose";
import { IUser } from "./user.interface";
import { IProduct } from "./product.interface";

interface orderItem {
  name: string;
  quantity: number;
  image: string;
  price: number;
  product: IProduct["_id"];
}

interface shippingAddress {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

interface paymentResult {
  id: string;
  status: string;
  updateTime: string;
  emailAddress: string;
}

export interface IOrder extends Document {
  user: IUser["_id"];
  orderItems: [orderItem];
  shippingAddress: shippingAddress;
  paymentMethod: string;
  paymentResult: paymentResult;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidAt?: Date;
  isDelivered: boolean;
  deliveredAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}
