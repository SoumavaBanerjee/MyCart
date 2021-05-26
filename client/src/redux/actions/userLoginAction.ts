import { userLoginActiontype } from "../action-types";
import { user } from "../../Types";

export interface loginUser {
  type: userLoginActiontype.LOGIN_USER;
}

export interface loginUserSuccess {
  type: userLoginActiontype.LOGIN_USER_SUCCESS;
  payload: user;
}

export interface loginUserFailure {
  type: userLoginActiontype.LOGIN_USER_FAILURE;
  payload: string;
}

export type UserLoginActions = loginUser | loginUserSuccess | loginUserFailure;
