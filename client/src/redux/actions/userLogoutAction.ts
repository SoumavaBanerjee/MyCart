import { userLogoutActiontype } from "../action-types";

export interface logoutUser {
  type: userLogoutActiontype.LOGOUT_USER;
}

export type UserLogoutActions = logoutUser;
