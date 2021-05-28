import { UserProfileActionType } from "../action-types/";
import { FetchUserProfileActions } from "../actions";
import { userProfile } from "../../Types";

interface registerUserState {
  loading: boolean;
  error: string | null;
  data: userProfile | null;
}

const initialState: registerUserState = {
  loading: false,
  error: null,
  data: null,
};

const userProfileReducer = (
  state: registerUserState = initialState,
  action: FetchUserProfileActions
) => {
  switch (action.type) {
    case UserProfileActionType.FETCH_USER_PROFILE:
      return { loading: true, error: null, data: null };
    case UserProfileActionType.FETCH_USER_PROFILE_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case UserProfileActionType.FETCH_USER_PROFILE_FAILURE:
      return { loading: false, error: action.payload, data: null };
    default:
      return state;
  }
};

export default userProfileReducer;
