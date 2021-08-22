import { userListActions } from "../actions";
import { userListActiontype } from "../action-types";
import { Dispatch } from "redux";

import { fetchUserList as fetchUserListApi } from "../../api/user";
import { RootState } from "../reducers";

export const fetchUserList =
  () =>
  async (dispatch: Dispatch<userListActions>, getState: () => RootState) => {
    dispatch({ type: userListActiontype.FETCH_USER_LIST });
    try {
      const {
        userLogin: { data },
      } = getState();

      if (data) {
        const { data: userListData } = await fetchUserListApi(data.token);

        dispatch({
          type: userListActiontype.FETCH_USER_LIST_SUCCESS,
          payload: userListData,
        });
      } else {
        throw new Error("You are not authorized as admin");
      }
    } catch (error) {
      dispatch({
        type: userListActiontype.FETCH_USER_LIST_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
