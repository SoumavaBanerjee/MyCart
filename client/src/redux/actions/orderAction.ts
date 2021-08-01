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
  payload: (order & { user: Partial<Pick<user, "name" | "email">> }) | null;
}

export interface fetchOrderDetailsFailure {
  type: OrderActionType.FETCH_ORDER_DETAILS_FAILURE;
  payload: string;
}

// pay order

export interface payOrder {
  type: OrderActionType.PAY_ORDER;
}

export interface payOrderSuccess {
  type: OrderActionType.PAY_ORDER_SUCCESS;
  payload: order;
}

export interface payOrderFailure {
  type: OrderActionType.PAY_ORDER_FAILURE;
  payload: string;
}

export interface payOrderReset {
  type: OrderActionType.PAY_ORDER_RESET;
}

export type OrderActions =
  | createOrder
  | createOrderSuccess
  | createOrderFailure
  | fetchOrderDetails
  | fetchOrderDetailsSuccess
  | fetchOrderDetailsFailure
  | payOrder
  | payOrderSuccess
  | payOrderFailure
  | payOrderReset;
