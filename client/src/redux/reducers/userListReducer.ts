import { userListActiontype } from "../action-types";
import { userListActions } from "../actions";
import { user } from "../../Types";

interface userListState {
  loading: boolean;
  error: string | null;
  data: user[] | null;
}

const initialState: userListState = {
  loading: false,
  error: null,
  data: null,
};

const fetchUserListReducer = (
  state: userListState = initialState,
  action: userListActions
): userListState => {
  switch (action.type) {
    case userListActiontype.FETCH_USER_LIST:
      return { data: null, error: null, loading: true };
    case userListActiontype.FETCH_USER_LIST_SUCCESS:
      return { data: action.payload, error: null, loading: false };
    case userListActiontype.FETCH_USER_LIST_FAILURE:
      return { data: null, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default fetchUserListReducer;
