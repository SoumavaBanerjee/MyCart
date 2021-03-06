import { userLoginActiontype, userRegisterActiontype } from "../action-types";
import { loginUserSuccess, UserRegisterActions } from "../actions";
import { Dispatch } from "redux";

import { registerUser } from "../../api/user";

export const registerNewUser =
  (name: string, email: string, password: string) =>
  async (dispatch: Dispatch<UserRegisterActions | loginUserSuccess>) => {
    dispatch({ type: userRegisterActiontype.REGISTER_USER });
    try {
      const { data } = await registerUser(name, email, password);
      console.log(data);
      dispatch({
        type: userRegisterActiontype.REGISTER_USER_SUCCESS,
        payload: data,
      });

      // login the user as well
      dispatch({
        type: userLoginActiontype.LOGIN_USER_SUCCESS,
        payload: data,
      });

      // set userdata in localStorage
      localStorage.setItem("userData", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: userRegisterActiontype.REGISTER_USER_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
