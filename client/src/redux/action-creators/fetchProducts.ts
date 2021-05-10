import { FetchProductActions } from "../actions";
import { ProductListActionType } from "../action-types";
import { Dispatch } from "redux";

import { getProducts } from "../../api/products";

export const fechProducts = () => async (
  dispatch: Dispatch<FetchProductActions>
) => {
  dispatch({ type: ProductListActionType.FETCH_PRODUCTS });
  try {
    const { data } = await getProducts();
    dispatch({
      type: ProductListActionType.FETCH_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: ProductListActionType.FETCH_PRODUCTS_FAILURE,
      payload: error.message,
    });
  }
};
