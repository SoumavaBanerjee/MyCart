import { UserProfileActionType } from "../action-types/";
import { userProfile } from "../../Types/";

export interface fetchUserProfile {
  type: UserProfileActionType.FETCH_USER_PROFILE;
}

export interface fetchUserProfileSuccess {
  type: UserProfileActionType.FETCH_USER_PROFILE_SUCCESS;
  payload: userProfile;
}

export interface fetchUserProfileFailure {
  type: UserProfileActionType.FETCH_USER_PROFILE_FAILURE;
  payload: string;
}

export type FetchUserProfileActions =
  | fetchUserProfile
  | fetchUserProfileSuccess
  | fetchUserProfileFailure;
