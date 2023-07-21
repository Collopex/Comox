import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    uid: null,
    fullName: null,
    email: null,
    phoneNumber: null,
  },
};

export const userInfoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userInfoSlice.actions;

// SELECTORS
export const selectUser = (state) => state.user.user;

export default userInfoSlice.reducer;
