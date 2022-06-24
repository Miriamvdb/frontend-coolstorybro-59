import axios from "axios";
import { apiUrl } from "../../config/constants";
import { fetchedSpaces, setSpaceWithStories } from "./slice";

// Setup the thunk to send a get request to the / endpoint
// dispatch the response to the spaces slice
// dispatch this thunk from the useEffect in the spacePage
// Setup a selector to select the spaces from the init

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
    console.log("Here");
    const response = await axios.get(`${apiUrl}/spaces/${id}`);
    console.log("Response space details with stories", response);
    dispatch(setSpaceWithStories(response.data));
  } catch (e) {
    console.log(e.message);
  }
};
