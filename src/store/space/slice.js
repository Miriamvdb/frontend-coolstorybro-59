import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allSpaces: [],
  spaceWithStories: null,
};

export const spaceSlice = createSlice({
  name: "space",
  initialState,
  reducers: {
    fetchedSpaces: (state, action) => {
      state.allSpaces = [...action.payload];
    },
    setSpaceWithStories: (state, action) => {
      state.spaceWithStories = action.payload;
    },
  },
});

export const { fetchedSpaces, setSpaceWithStories } = spaceSlice.actions;
export default spaceSlice.reducer;
