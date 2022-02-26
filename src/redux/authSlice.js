import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  username: "",
  password: ""
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: initialValue
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
