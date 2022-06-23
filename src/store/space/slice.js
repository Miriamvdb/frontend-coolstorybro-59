import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spaces: [] || null,
  spaceDetails: {} || null,
};

export const spaceSlice = createSlice({
  name: "space",
  initialState,
  reducers: {
    fetchedSpaces: (state, action) => {
      state.spaces = [...action.payload];
    },
  },
});

export const { fetchedSpaces } = spaceSlice.actions;
export default spaceSlice.reducer;
