import { UserProfileActionType } from "../action-types/";
import { FetchUserProfileActions, UpdateUserProfileActions } from "../actions";
import { userProfile } from "../../Types";

interface fetchUserProfileState {
  loading: boolean;
  error: string | null;
  data: userProfile | null;
}

interface updateUserProfileState extends fetchUserProfileState {
  success: boolean;
}

const initialFetchState: fetchUserProfileState = {
  loading: false,
  error: null,
  data: null,
};

const initialUpdateState: updateUserProfileState = {
  loading: false,
  error: null,
  data: null,
  success: false,
};

export const fetchUserProfileReducer = (
  state: fetchUserProfileState = initialFetchState,
  action: FetchUserProfileActions
): fetchUserProfileState => {
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

export const updateUserProfileReducer = (
  state: updateUserProfileState = initialUpdateState,
  action: UpdateUserProfileActions
): updateUserProfileState => {
  switch (action.type) {
    case UserProfileActionType.UPDATE_USER_PROFILE:
      return { loading: true, error: null, data: null, success: false };
    case UserProfileActionType.UPDATE_USER_PROFILE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null,
        success: true,
      };
    case UserProfileActionType.UPDATE_USER_PROFILE_FAILURE:
      return {
        loading: false,
        error: action.payload,
        data: null,
        success: false,
      };
    default:
      return state;
  }
};
