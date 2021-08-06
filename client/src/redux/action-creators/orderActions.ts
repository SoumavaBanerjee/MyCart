import { OrderActions } from "../actions";
import { OrderActionType } from "../action-types";

import { Dispatch } from "redux";
import { RootState } from "../reducers/";

import {
  createOrder as createOrderApi,
  fetchOrder,
  orderPay,
} from "../../api/order";
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

export const payOrder =
  (id: string, paymentResult: any) =>
  async (dispatch: Dispatch<OrderActions>, getState: () => RootState) => {
    console.log("Inside pay order action");
    dispatch({ type: OrderActionType.PAY_ORDER });

    try {
      const {
        userLogin: { data },
      } = getState();

      console.log("payorder action creator", data);

      if (data) {
        const { data: payOrderData } = await orderPay(
          data.token,
          id,
          paymentResult
        );

        dispatch({
          type: OrderActionType.PAY_ORDER_SUCCESS,
          payload: payOrderData,
        });
      } else {
        throw new Error("Something went wrong! Please re-login again");
      }
    } catch (error) {
      dispatch({
        type: OrderActionType.PAY_ORDER_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const resetOrderState =
  () => async (dispatch: Dispatch<OrderActions>) => {
    dispatch({ type: OrderActionType.PAY_ORDER_RESET });
  };
