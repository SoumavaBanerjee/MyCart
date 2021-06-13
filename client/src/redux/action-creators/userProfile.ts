import { FetchUserProfileActions, UpdateUserProfileActions } from "../actions";
import { UserProfileActionType } from "../action-types";

import { Dispatch } from "redux";
import { RootState } from "../reducers/";

import { fetchUserProfile, updateUserProfile } from "../../api/user";
import { userProfile } from "../../Types";

export const fetchUserDetails =
  (id: string) =>
  async (
    dispatch: Dispatch<FetchUserProfileActions>,
    getState: () => RootState
  ) => {
    dispatch({ type: UserProfileActionType.FETCH_USER_PROFILE });
    try {
      const {
        userLogin: { data },
      } = getState();

      if (data) {
        const { data: profileData } = await fetchUserProfile(id, data.token);
        dispatch({
          type: UserProfileActionType.FETCH_USER_PROFILE_SUCCESS,
          payload: profileData,
        });
      } else {
        throw new Error("Something went wrong! Please re-login again");
      }
    } catch (error) {
      dispatch({
        type: UserProfileActionType.FETCH_USER_PROFILE_FAILURE,
        payload: error.message,
      });
    }
  };

export const updateUserDetails =
  (user: userProfile) =>
  async (
    dispatch: Dispatch<UpdateUserProfileActions>,
    getState: () => RootState
  ) => {
    dispatch({ type: UserProfileActionType.UPDATE_USER_PROFILE });
    try {
      const {
        userLogin: { data },
      } = getState();

      if (data) {
        const { data: profileData } = await updateUserProfile(user, data.token);
        dispatch({
          type: UserProfileActionType.UPDATE_USER_PROFILE_SUCCESS,
          payload: profileData,
        });
      } else {
        throw new Error("Something went wrong! Please re-login again");
      }
    } catch (error) {
      dispatch({
        type: UserProfileActionType.UPDATE_USER_PROFILE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
