import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timer: 0,
};
export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    startTimer: (state) => {
      state.timer += 1;
    },

    resetTimer: (state) => {
      state.timer = 0;
    },
  },
});

export const { startTimer, resetTimer } = timerSlice.actions;
export default timerSlice.reducer;
