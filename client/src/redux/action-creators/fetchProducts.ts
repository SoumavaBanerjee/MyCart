import { FetchProductActions } from "../actions";
import { ProductListActionType } from "../action-types";
import { Dispatch } from "redux";

import { getProducts } from "../../api/products";

export const fetchProducts =
  () => async (dispatch: Dispatch<FetchProductActions>) => {
    dispatch({ type: ProductListActionType.FETCH_PRODUCTS });
    try {
      const { data } = await getProducts();
      console.log(data);
      dispatch({
        type: ProductListActionType.FETCH_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ProductListActionType.FETCH_PRODUCTS_FAILURE,
        payload: error.message,
      });
    }
  };
