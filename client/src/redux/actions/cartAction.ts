import { CartActionType } from "../action-types";
import { product } from "../../Types";

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

export type CartAction = cartAddItem | cartRemoveItem;
