import { userLoginActiontype, userLogoutActiontype } from "../action-types";
import { UserLoginActions, UserLogoutActions } from "../actions";
import { Dispatch } from "redux";

import { loginUser } from "../../api/user";

export const signInUser =
  (email: string, password: string) =>
  async (dispatch: Dispatch<UserLoginActions>) => {
    dispatch({ type: userLoginActiontype.LOGIN_USER });
    try {
      const { data } = await loginUser(email, password);
      console.log(data);
      dispatch({
        type: userLoginActiontype.LOGIN_USER_SUCCESS,
        payload: data,
      });

      //   set userdata in localStorage

      localStorage.setItem("userData", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: userLoginActiontype.LOGIN_USER_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const signOutUser =
  () => async (dispatch: Dispatch<UserLogoutActions>) => {
    localStorage.removeItem("userData");
    dispatch({ type: userLogoutActiontype.LOGOUT_USER });
  };
