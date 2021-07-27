import { product } from "../Product/productItem";

export type shippingAddress = {
  address: string;
  city: string;
  postalCode: string;
  country: string;
};

export type paymentMethod = {
  method: "paypal" | "stripe";
};

export interface cartStateProduct {
  product: product["_id"];
  name: product["name"];
  image: product["image"];
  price: product["price"];
  countInStock: product["countInStock"];
  quantity: number;
}
