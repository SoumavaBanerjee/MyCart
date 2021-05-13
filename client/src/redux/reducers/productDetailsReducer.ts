import { ProductDetailsActionType } from "../action-types/";
import { FetchProductDetailsActions } from "../actions/";

import { product } from "../../Types/";

interface ProductDetailsState {
  loading: boolean;
  error: string | null;
  data: product | undefined;
}

const initialState: ProductDetailsState = {
  data: undefined,
  error: null,
  loading: false,
};

const productDetailsReducer = (
  state: ProductDetailsState = initialState,
  action: FetchProductDetailsActions
): ProductDetailsState => {
  switch (action.type) {
    case ProductDetailsActionType.FETCH_PRODUCT_DETAILS:
      return { data: undefined, error: null, loading: true };
    case ProductDetailsActionType.FETCH_PRODUCT_DETAILS_SUCCESS:
      return { data: action.payload, error: null, loading: false };
    case ProductDetailsActionType.FETCH_PRODUCTS_DETAILS_FAILURE:
      return { data: undefined, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default productDetailsReducer;
