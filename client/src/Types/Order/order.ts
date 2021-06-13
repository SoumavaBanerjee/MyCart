import { product } from "../Product/productItem";

interface orderItem {
  name: string;
  quantity: number;
  image: string;
  price: number;
  product: product["_id"];
}

interface shippingAddress {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export type order = {
  _id?: string;
  orderItems: orderItem[];
  shippingAddress: shippingAddress | null;
  paymentMethod: string;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
};
