import { CartActionType } from "../action-types";
import { CartAction } from "../actions/";

import { shippingAddress, cartStateProduct } from "../../Types/";

interface cartState {
  cartItems: cartStateProduct[];
  shippingAddress: shippingAddress | null;
  paymentMethod: string;
}

const initialState: cartState = {
  cartItems: [],
  shippingAddress: null,
  paymentMethod: "stripe",
};

const cartReducer = (
  state: cartState = initialState,
  action: CartAction
): cartState => {
  switch (action.type) {
    case CartActionType.CART_ADD_ITEMS:
      const item = action.payload;

      const itemExists = state.cartItems.find(
        (cartItem) => cartItem.product === item.product
      );

      if (itemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.product === itemExists.product ? item : cartItem
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

    case CartActionType.CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case CartActionType.CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
