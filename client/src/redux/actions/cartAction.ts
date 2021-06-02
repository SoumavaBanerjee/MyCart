import { CartActionType } from "../action-types";
import { product, shippingAddress } from "../../Types";

export interface cartAddItem {
  type: CartActionType.CART_ADD_ITEMS;
  payload: {
    product: product["_id"];
    name: product["name"];
    image: product["image"];
    price: product["price"];
    countInStock: product["countInStock"];
    quantity: number;
  };
}

export interface cartRemoveItem {
  type: CartActionType.CART_REMOVE_ITEMS;
  payload: {
    product: product["_id"];
  };
}

export interface saveShippingAddress {
  type: CartActionType.CART_SAVE_SHIPPING_ADDRESS;
  payload: shippingAddress;
}

export type CartAction = cartAddItem | cartRemoveItem | saveShippingAddress;
