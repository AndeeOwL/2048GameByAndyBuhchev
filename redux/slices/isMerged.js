import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMerged: [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
  ],
};
export const isMergedSlice = createSlice({
  name: "isMerged",
  initialState,
  reducers: {
    changeIsMerged: (state, action) => {
      state.isMerged = action.payload;
    },
    resetIsMerged: (state) => {
      state.isMerged = [
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
      ];
    },
  },
});

export const { changeIsMerged, resetIsMerged } = isMergedSlice.actions;
export default isMergedSlice.reducer;
