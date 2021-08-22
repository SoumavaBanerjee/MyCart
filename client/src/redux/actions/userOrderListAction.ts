import { order } from "../../Types/";
import { UserOrderListActionType } from "../action-types/userOrderList";

export interface fetchOrderList {
  type: UserOrderListActionType.FETCH_USER_ORDER_LIST;
}

export interface fetchOrderListSuccess {
  type: UserOrderListActionType.FETCH_USER_ORDER_LIST_SUCCESS;
  payload: order[];
}

export interface fetchOrderListFailure {
  type: UserOrderListActionType.FETCH_USER_ORDER_LIST_FAILURE;
  payload: string;
}

export type fetchOrderListActions =
  | fetchOrderList
  | fetchOrderListSuccess
  | fetchOrderListFailure;
