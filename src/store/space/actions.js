import axios from "axios";
import { apiUrl } from "../../config/constants";
import {
  fetchedSpaces,
  setSpaceWithStories,
  // storyDeleteSuccess,
} from "./slice";

export const fetchSpaces = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/spaces`);
    console.log("Response all spaces", response.data);
    dispatch(fetchedSpaces(response.data));
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchSpaceWithStories = (id) => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/spaces/${id}`);
    console.log("Response space details with stories", response);
    dispatch(setSpaceWithStories(response.data));
  } catch (e) {
    console.log(e.message);
  }
};

// export const deleteStory = (id) => async (dispatch, getState) => {
//   try {
//     console.log("Delete story thunk?");
//     const response = await axios.delete(`${apiUrl}/stories/${id}`);
//     console.log("Response from delete story thunk?", response.data);
//     dispatch(storyDeleteSuccess(id));
//   } catch (e) {
//     console.log(e.message);
//   }
// };
