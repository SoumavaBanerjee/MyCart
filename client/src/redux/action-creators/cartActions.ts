import { CartActionType } from "../action-types";
import { CartAction } from "../actions";

import { getProductItem } from "../../api/products";

import { Dispatch } from "redux";
import { RootState } from "../reducers/";

export const addProductToCart =
  (id: string, quantity: number) =>
  async (dispatch: Dispatch<CartAction>, getState: () => RootState) => {
    const { data } = await getProductItem(id);

    dispatch({
      type: CartActionType.CART_ADD_ITEMS,
      payload: {
        product: data._id,
        image: data.image,
        countInStock: data.countInStock,
        name: data.name,
        price: data.price,
        quantity,
      },
    });

    // persisting updated cart in local storage

    console.log(getState().Cart.cartItems);

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().Cart.cartItems)
    );
  };

export const removeProductFromCart =
  (id: string) =>
  async (dispatch: Dispatch<CartAction>, getState: () => RootState) => {
    dispatch({
      type: CartActionType.CART_REMOVE_ITEMS,
      payload: {
        product: id,
      },
    });

    // persist updated state in localstorage
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().Cart.cartItems)
    );
  };
