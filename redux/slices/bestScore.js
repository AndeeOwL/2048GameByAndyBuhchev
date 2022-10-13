import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bestScore: 0,
};
export const bestScoreSlice = createSlice({
  name: "bestScore",
  initialState,
  reducers: {
    updateBestScore: (state, action) => {
      state.bestScore = action.payload;
    },
  },
});

export const { updateBestScore } = bestScoreSlice.actions;
export default bestScoreSlice.reducer;
