import { FetchUserProfileActions } from "../actions";
import { UserProfileActionType } from "../action-types";

import { Dispatch } from "redux";
import { RootState } from "../reducers/";

import { fetchUserProfile } from "../../api/user";

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
        const { data: profileData } = await fetchUserProfile(id, data.token!);
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
