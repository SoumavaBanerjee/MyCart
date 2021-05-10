import { ProductListActionType } from "../action-types";
import { product } from "../../Types";

export interface fetchProducts {
  type: ProductListActionType.FETCH_PRODUCTS;
}

export interface fetchProductsSuccess {
  type: ProductListActionType.FETCH_PRODUCTS_SUCCESS;
  payload: product[];
}

export interface fetchProductFailure {
  type: ProductListActionType.FETCH_PRODUCTS_FAILURE;
  payload: string;
}

export type FetchProductActions =
  | fetchProducts
  | fetchProductFailure
  | fetchProductsSuccess;
