import { createOrderActionType } from "../action-types";
import { order } from "../../Types";

export interface createOrder {
  type: createOrderActionType.CREATE_ORDER;
}

export interface createOrderSuccess {
  type: createOrderActionType.CREATE_ORDER_SUCCESS;
  payload: order;
}

export interface createOrderFailure {
  type: createOrderActionType.CREATE_ORDER_FALIURE;
  payload: string;
}

export type OrderActions =
  | createOrder
  | createOrderSuccess
  | createOrderFailure;
