import { OrderActions } from "../actions";
import { OrderActionType } from "../action-types";

import { Dispatch } from "redux";
import { RootState } from "../reducers/";

import { createOrder as createOrderApi, fetchOrder } from "../../api/order";
import { order } from "../../Types";

export const createOrder =
  (orderDetails: order) =>
  async (dispatch: Dispatch<OrderActions>, getState: () => RootState) => {
    dispatch({ type: OrderActionType.CREATE_ORDER });
    try {
      const {
        userLogin: { data },
      } = getState();

      if (data) {
        const { data: orderData } = await createOrderApi(
          orderDetails,
          data.token
        );
        dispatch({
          type: OrderActionType.CREATE_ORDER_SUCCESS,
          payload: orderData,
        });
      } else {
        throw new Error("Something went wrong! Please re-login again");
      }
    } catch (error) {
      dispatch({
        type: OrderActionType.CREATE_ORDER_FALIURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const fetchOrderDetails =
  (id: string) =>
  async (dispatch: Dispatch<OrderActions>, getState: () => RootState) => {
    dispatch({ type: OrderActionType.FETCH_ORDER_DETAILS });
    try {
      const {
        userLogin: { data },
      } = getState();

      if (data) {
        const { data: orderDetailData } = await fetchOrder(data.token, id);
        dispatch({
          type: OrderActionType.FETCH_ORDER_DETAILS_SUCCESS,
          payload: orderDetailData,
        });
      } else {
        throw new Error("Something went wrong! Please re-login again");
      }
    } catch (error) {
      dispatch({
        type: OrderActionType.FETCH_ORDER_DETAILS_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
