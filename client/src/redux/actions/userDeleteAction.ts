import { userDeleteActiontype } from "../action-types";

export interface deleteUser {
  type: userDeleteActiontype.DELETE_USER;
}

export interface deleteUserSuccess {
  type: userDeleteActiontype.DELETE_USER_SUCCESS;
}

export interface deleteUserFailure {
  type: userDeleteActiontype.DELETE_USER_FAILURE;
  payload: string;
}

export type deleteUserActions =
  | deleteUser
  | deleteUserSuccess
  | deleteUserFailure;
