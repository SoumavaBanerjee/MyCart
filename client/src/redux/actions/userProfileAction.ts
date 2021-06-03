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

export interface updateUserProfile {
  type: UserProfileActionType.UPDATE_USER_PROFILE;
}

export interface updateUserProfileSuccess {
  type: UserProfileActionType.UPDATE_USER_PROFILE_SUCCESS;
  payload: userProfile;
}

export interface updateUserProfileFailure {
  type: UserProfileActionType.UPDATE_USER_PROFILE_FAILURE;
  payload: string;
}

export type FetchUserProfileActions =
  | fetchUserProfile
  | fetchUserProfileSuccess
  | fetchUserProfileFailure;

export type UpdateUserProfileActions =
  | updateUserProfile
  | updateUserProfileSuccess
  | updateUserProfileFailure;
