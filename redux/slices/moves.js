import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moves: 0,
};
export const movesSlice = createSlice({
  name: "moves",
  initialState,
  reducers: {
    addMoves: (state) => {
      state.moves += 1;
    },
    resetMoves: (state) => {
      state.moves = 0;
    },
  },
});

export const { addMoves, resetMoves } = movesSlice.actions;
export default movesSlice.reducer;
