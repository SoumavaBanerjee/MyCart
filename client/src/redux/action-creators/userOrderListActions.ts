import { fetchOrderListActions } from "../actions";
import { UserOrderListActionType } from "../action-types";
import { Dispatch } from "redux";

import { fetchUserOrderList as fetchOrderListApi } from "../../api/order";
import { RootState } from "../reducers";

export const fetchOrderList =
  () =>
  async (
    dispatch: Dispatch<fetchOrderListActions>,
    getState: () => RootState
  ) => {
    dispatch({ type: UserOrderListActionType.FETCH_USER_ORDER_LIST });
    try {
      const {
        userLogin: { data },
      } = getState();

      console.log("payorder action creator", data);

      if (data) {
        const { data: orderListData } = await fetchOrderListApi(data.token);

        dispatch({
          type: UserOrderListActionType.FETCH_USER_ORDER_LIST_SUCCESS,
          payload: orderListData,
        });
      } else {
        throw new Error("Something went wrong! Please re-login again");
      }
    } catch (error) {
      dispatch({
        type: UserOrderListActionType.FETCH_USER_ORDER_LIST_FAILURE,
        payload: error.message,
      });
    }
  };
