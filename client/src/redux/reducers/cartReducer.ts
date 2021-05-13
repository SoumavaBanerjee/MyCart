import { CartActionType } from "../action-types";
import { CartAction } from "../actions/";

import { product } from "../../Types/";

interface cartStateProduct {
  product: product["_id"];
  name: product["name"];
  image: product["image"];
  price: product["price"];
  countInStock: product["countInStock"];
  quantity: number;
}

interface cartState {
  cartItems: cartStateProduct[];
}

const initialState: cartState = {
  cartItems: [],
};

const cartReducer = (
  state: cartState = initialState,
  action: CartAction
): cartState => {
  switch (action.type) {
    case CartActionType.CART_ADD_ITEMS:
      const itemExists = state.cartItems.find(
        (item) => action.payload.product === item.product
      );

      if (itemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.product === itemExists.product ? itemExists : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }

    case CartActionType.CART_REMOVE_ITEMS:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product !== action.payload.product
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
