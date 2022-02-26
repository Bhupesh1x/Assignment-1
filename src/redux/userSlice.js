import { createSlice } from "@reduxjs/toolkit";

const initialValue = [];

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: initialValue,
  },
  reducers: {
    addData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addData } = userSlice.actions;

export default userSlice.reducer;
