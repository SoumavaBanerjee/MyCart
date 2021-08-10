import { product } from "../Product/productItem";
import { shippingAddress } from "../shippingAddress/shippingAddress";
export interface orderItem {
  name: string;
  quantity: number;
  image: string;
  price: number;
  product: product["_id"];
}

export type order = {
  _id?: string;
  orderItems: orderItem[];
  shippingAddress: shippingAddress | null;
  paymentMethod: string;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid?: boolean;
  paidAt?: string;
  isDelivered?: boolean;
  DeliveredAt?: string;
  createdAt?: string;
};
