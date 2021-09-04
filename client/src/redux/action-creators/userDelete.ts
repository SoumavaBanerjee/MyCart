import { deleteUserActions } from "../actions";
import { userDeleteActiontype } from "../action-types";

import { Dispatch } from "redux";
import { RootState } from "../reducers/";

import { deleteUser as deleteUserApi } from "../../api/user";

export const deleteUser =
  (id: string) =>
  async (dispatch: Dispatch<deleteUserActions>, getState: () => RootState) => {
    dispatch({ type: userDeleteActiontype.DELETE_USER });
    try {
      const {
        userLogin: { data },
      } = getState();

      if (data) {
        await deleteUserApi(id, data.token);
        dispatch({
          type: userDeleteActiontype.DELETE_USER_SUCCESS,
        });
      } else {
        throw new Error("Something went wrong! Please re-login again");
      }
    } catch (error) {
      dispatch({
        type: userDeleteActiontype.DELETE_USER_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
