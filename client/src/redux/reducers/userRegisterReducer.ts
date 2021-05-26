import { userRegisterActiontype } from "../action-types";
import { UserRegisterActions } from "../actions";
import { user } from "../../Types";

interface registerUserState {
  loading: boolean;
  error: string | null;
  data: user | null;
}

const initialState: registerUserState = {
  loading: false,
  error: null,
  data: null,
};

const registerUserReducer = (
  state: registerUserState = initialState,
  action: UserRegisterActions
): registerUserState => {
  switch (action.type) {
    case userRegisterActiontype.REGISTER_USER:
      return { data: null, error: null, loading: true };
    case userRegisterActiontype.REGISTER_USER_SUCCESS:
      return { data: action.payload, error: null, loading: false };
    case userRegisterActiontype.REGISTER_USER_FAILURE:
      return { data: null, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default registerUserReducer;
