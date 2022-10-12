import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  steps: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
};
export const stepsSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    changeSteps: (state, action) => {
      state.steps = action.payload;
    },
    resetSteps: (state) => {
      state.steps = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ];
    },
  },
});

export const { changeSteps, resetSteps } = stepsSlice.actions;
export default stepsSlice.reducer;
