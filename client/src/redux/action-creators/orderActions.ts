import { OrderActions } from "../actions";
import { createOrderActionType } from "../action-types";

import { Dispatch } from "redux";
import { RootState } from "../reducers/";

import { createOrder as createOrderApi } from "../../api/order";
import { order } from "../../Types";

export const createOrder =
  (orderDetails: order) =>
  async (dispatch: Dispatch<OrderActions>, getState: () => RootState) => {
    dispatch({ type: createOrderActionType.CREATE_ORDER });
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
          type: createOrderActionType.CREATE_ORDER_SUCCESS,
          payload: orderData,
        });
      } else {
        throw new Error("Something went wrong! Please re-login again");
      }
    } catch (error) {
      dispatch({
        type: createOrderActionType.CREATE_ORDER_FALIURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
