import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  previusBoard: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
};
export const previusBoardStateSlice = createSlice({
  name: "previusBoardState",
  initialState,
  reducers: {
    changeBoardState: (state, action) => {
      state.previusBoard = action.payload;
    },
    resetBoardState: (state) => {
      state.previusBoard = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ];
    },
  },
});

export const { changeBoardState, resetBoardState } =
  previusBoardStateSlice.actions;
export default previusBoardStateSlice.reducer;
