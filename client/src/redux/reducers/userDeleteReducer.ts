import { userDeleteActiontype } from "../action-types";
import { deleteUserActions } from "../actions";

interface deleteUserState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: deleteUserState = {
  loading: false,
  success: false,
  error: null,
};

const deleteUserReducer = (
  state: deleteUserState = initialState,
  action: deleteUserActions
): deleteUserState => {
  switch (action.type) {
    case userDeleteActiontype.DELETE_USER:
      return { error: null, success: false, loading: true };
    case userDeleteActiontype.DELETE_USER_SUCCESS:
      return { error: null, loading: false, success: true };
    case userDeleteActiontype.DELETE_USER_FAILURE:
      return { error: action.payload, loading: false, success: false };
    default:
      return state;
  }
};

export default deleteUserReducer;
