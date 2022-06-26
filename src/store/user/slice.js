import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  profile: null,
  space: null, // Feature 4
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.user;
      state.space = action.payload.space; // Feature 4
    },
    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
      state.space = null; // Feature 4
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
      state.space = action.payload.space; // Feature 4
    },
    // Feature 4: Delete story from My Space
    storyDeleteSuccess: (state, action) => {
      const storyId = action.payload;
      state.space.stories = state.space.stories.filter(
        (spc) => spc.id !== storyId
      );
    },
  },
});

export const {
  loginSuccess,
  logOut,
  tokenStillValid,
  storyDeleteSuccess, // Feature 4: Delete story from My Space
} = userSlice.actions;

export default userSlice.reducer;
