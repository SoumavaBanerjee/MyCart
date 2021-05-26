import { userLoginActiontype, userLogoutActiontype } from "../action-types";
import { UserLoginActions, UserLogoutActions } from "../actions";
import { user } from "../../Types";

interface loginUserState {
  loading: boolean;
  error: string | null;
  data: user | null;
}

const initialState: loginUserState = {
  loading: false,
  error: null,
  data: null,
};

const loginUserReducer = (
  state: loginUserState = initialState,
  action: UserLoginActions | UserLogoutActions
): loginUserState => {
  switch (action.type) {
    case userLoginActiontype.LOGIN_USER:
      return { data: null, error: null, loading: true };
    case userLoginActiontype.LOGIN_USER_SUCCESS:
      return { data: action.payload, error: null, loading: false };
    case userLoginActiontype.LOGIN_USER_FAILURE:
      return { data: null, error: action.payload, loading: false };
    case userLogoutActiontype.LOGOUT_USER:
      return { data: null, error: null, loading: false };
    default:
      return state;
  }
};

export default loginUserReducer;
