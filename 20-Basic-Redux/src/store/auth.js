import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false };

export const AuthSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = AuthSlice.actions;
