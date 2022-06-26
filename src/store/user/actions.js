import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";
import { appLoading, appDoneLoading, setMessage } from "../appState/slice";
import { showMessageWithTimeout } from "../appState/actions";
import {
  loginSuccess,
  logOut,
  tokenStillValid,
  storyDeleteSuccess, // Feature 4: Delete story from My Space
  storyPostSuccess, // Feature 5: Post a new story with corresponding id
} from "./slice";

export const signUp = (name, email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/auth/signup`, {
        name,
        email,
        password,
      });

      dispatch(
        loginSuccess({
          token: response.data.token,
          user: response.data.user,
          space: response.data.space, // Feature 4
        })
      );
      dispatch(showMessageWithTimeout("success", true, "account created"));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      } else {
        console.log(error.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.message,
          })
        );
      }
      dispatch(appDoneLoading());
    }
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });

      dispatch(
        loginSuccess({
          token: response.data.token,
          user: response.data.user,
          space: response.data.space, // Feature 4
        })
      );
      dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      } else {
        console.log(error.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      }
      dispatch(appDoneLoading());
    }
  };
};

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return;

    dispatch(appLoading());
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // token is still valid
      dispatch(
        tokenStillValid({
          user: response.data.user,
          space: response.data.space, // Feature 4
        })
      );
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};

// Feature 4: Delete story from My Space
export const deleteStory = (storyId) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    const { space, token } = getState().user;
    // console.log(space, token);
    const spaceId = space.stories.id;

    try {
      const response = await axios.delete(
        `${apiUrl}/spaces/${spaceId}/stories/${storyId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Story deleted?", response.data);
      dispatch(storyDeleteSuccess(storyId));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
    }
  };
};

// Feature 5: Post a new story with corresponding id
export const postNewStory = (name, content, imageUrl) => {
  return async (dispatch, getState) => {
    try {
      dispatch(appLoading());
      const { space, token } = getState().user;
      // console.log(name, content, imageUrl);
      console.log(space, token);

      const response = await axios.post(
        `${apiUrl}/spaces/${space.id}/stories`,
        {
          name,
          content,
          imageUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Created a new story!", response);
      dispatch(showMessageWithTimeout("Success", true, "Story created!", 3000));
      dispatch(storyPostSuccess(response.data.story));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
    }
  };
};
