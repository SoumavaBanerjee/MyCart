import { ProductDetailsActionType } from "../action-types/";
import { product } from "../../Types/";

export interface fetchProductDetails {
  type: ProductDetailsActionType.FETCH_PRODUCT_DETAILS;
}

export interface fetchProductDetailsSuccess {
  type: ProductDetailsActionType.FETCH_PRODUCT_DETAILS_SUCCESS;
  payload: product | undefined;
}

export interface fetchProductDetailsFailure {
  type: ProductDetailsActionType.FETCH_PRODUCTS_DETAILS_FAILURE;
  payload: string;
}

export type FetchProductDetailsActions =
  | fetchProductDetails
  | fetchProductDetailsSuccess
  | fetchProductDetailsFailure;
