import axios from "axios";
import { apiUrl } from "../../config/constants";
import { fetchedSpaces } from "./slice";

export const fetchSpaces = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/spaces`);
    console.log("response", response.data);
    dispatch(fetchedSpaces(response.data)); // [{}, {}, {}]
  } catch (e) {
    console.log(e.message);
  }
};
