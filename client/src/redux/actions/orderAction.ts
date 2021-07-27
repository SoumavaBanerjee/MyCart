import { OrderActionType } from "../action-types";
import { order, user } from "../../Types";

// create order
export interface createOrder {
  type: OrderActionType.CREATE_ORDER;
}

export interface createOrderSuccess {
  type: OrderActionType.CREATE_ORDER_SUCCESS;
  payload: order;
}

export interface createOrderFailure {
  type: OrderActionType.CREATE_ORDER_FALIURE;
  payload: string;
}

export interface fetchOrderDetails {
  type: OrderActionType.FETCH_ORDER_DETAILS;
}

// fetch order by id
export interface fetchOrderDetailsSuccess {
  type: OrderActionType.FETCH_ORDER_DETAILS_SUCCESS;
  payload: order & Pick<user, "name" | "email">;
}

export interface fetchOrderDetailsFailure {
  type: OrderActionType.FETCH_ORDER_DETAILS_FAILURE;
  payload: string;
}

export type OrderActions =
  | createOrder
  | createOrderSuccess
  | createOrderFailure
  | fetchOrderDetails
  | fetchOrderDetailsSuccess
  | fetchOrderDetailsFailure;
