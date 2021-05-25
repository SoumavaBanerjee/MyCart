import { userRegisterActiontype } from "../action-types";
import { user } from "../../Types";

export interface registerUser {
  type: userRegisterActiontype.REGISTER_USER;
}

export interface registerUserSuccess {
  type: userRegisterActiontype.REGISTER_USER_SUCCESS;
  payload: user;
}

export interface registerUserFailure {
  type: userRegisterActiontype.REGISTER_USER_FAILURE;
  payload: string;
}

export type UserRegisterActions =
  | registerUser
  | registerUserSuccess
  | registerUserFailure;
