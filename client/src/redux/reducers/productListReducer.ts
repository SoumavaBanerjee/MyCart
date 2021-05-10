import { ProductListActionType } from "../action-types/";
import { FetchProductActions } from "../actions/fetchProductsAction";

import { product } from "../../Types/";

interface ProductListState {
  loading: boolean;
  error: string | null;
  data: product[];
}

const initialState: ProductListState = {
  data: [],
  error: null,
  loading: false,
};

export const productListReducer = (
  state: ProductListState = initialState,
  action: FetchProductActions
): ProductListState => {
  switch (action.type) {
    case ProductListActionType.FETCH_PRODUCTS:
      return { data: [], error: null, loading: true };
    case ProductListActionType.FETCH_PRODUCTS_SUCCESS:
      return { data: action.payload, error: null, loading: false };
    case ProductListActionType.FETCH_PRODUCTS_FAILURE:
      return { data: [], error: action.payload, loading: false };
    default:
      return state;
  }
};
