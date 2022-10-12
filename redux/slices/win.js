import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  win: false,
};
export const winSlice = createSlice({
  name: "win",
  initialState,
  reducers: {
    changeWin: (state, action) => {
      state.win = action.payload;
    },
    resetWin: (state) => {
      state.win = false;
    },
  },
});

export const { changeWin, resetWin } = winSlice.actions;
export default winSlice.reducer;
