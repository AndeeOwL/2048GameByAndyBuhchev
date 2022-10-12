import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  direction: "",
};
export const directionSlice = createSlice({
  name: "direction",
  initialState,
  reducers: {
    changeDirection: (state, action) => {
      state.direction = action.payload;
    },
    resetDirection: (state) => {
      state.direction = "";
    },
  },
});

export const { changeDirection, resetDirection } = directionSlice.actions;
export default directionSlice.reducer;
