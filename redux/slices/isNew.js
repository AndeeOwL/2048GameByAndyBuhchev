import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNew: [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
  ],
};
export const isNewSlice = createSlice({
  name: "isNew",
  initialState,
  reducers: {
    changeIsNew: (state, action) => {
      state.isNew = action.payload;
    },
    resetIsNew: (state) => {
      state.isNew = [
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
      ];
    },
  },
});

export const { changeIsNew, resetIsNew } = isNewSlice.actions;
export default isNewSlice.reducer;
