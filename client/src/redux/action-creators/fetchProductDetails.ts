import { FetchProductDetailsActions } from "../actions";
import { ProductDetailsActionType } from "../action-types";
import { Dispatch } from "redux";

import { getProductItem } from "../../api/products";

export const fetchProductDetails =
  (id: string) => async (dispatch: Dispatch<FetchProductDetailsActions>) => {
    dispatch({ type: ProductDetailsActionType.FETCH_PRODUCT_DETAILS });
    try {
      const { data } = await getProductItem(id);
      console.log(data);
      dispatch({
        type: ProductDetailsActionType.FETCH_PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ProductDetailsActionType.FETCH_PRODUCTS_DETAILS_FAILURE,
        payload: error.message,
      });
    }
  };
