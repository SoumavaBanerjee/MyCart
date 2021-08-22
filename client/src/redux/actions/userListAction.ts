import { userListActiontype } from "../action-types";
import { user } from "../../Types";

export interface fetchUserList {
  type: userListActiontype.FETCH_USER_LIST;
}

export interface fetchUserListSuccess {
  type: userListActiontype.FETCH_USER_LIST_SUCCESS;
  payload: user[];
}

export interface fetchUserListFailure {
  type: userListActiontype.FETCH_USER_LIST_FAILURE;
  payload: string;
}

export type userListActions =
  | fetchUserList
  | fetchUserListSuccess
  | fetchUserListFailure;
