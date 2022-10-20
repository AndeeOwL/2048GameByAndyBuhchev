import { createSlice } from "@reduxjs/toolkit";
import { showRandom } from "../../services/showRandom";

const initialState = {
  gameValues: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  previusBoard: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
};
export const gameValuesSlice = createSlice({
  name: "gameValues",
  initialState,
  reducers: {
    startGameValues: (state) => {
      let resultOne = showRandom(state.gameValues);
      let valueOne = resultOne[0];
      let rowOne = resultOne[1];
      let colOne = resultOne[2];
      state.gameValues[rowOne][colOne] = valueOne;
      let resultTwo = showRandom(state.gameValues);
      let valueTwo = resultTwo[0];
      let rowTwo = resultTwo[1];
      let colTwo = resultTwo[2];
      state.gameValues[rowTwo][colTwo] = valueTwo;
    },
    updateGameValues: (state, action) => {
      state.gameValues = action.payload;
    },
    resetGameValues: (state) => {
      state.gameValues = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ];
    },
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

export const {
  updateGameValues,
  resetGameValues,
  startGameValues,
  changeBoardState,
  resetBoardState,
} = gameValuesSlice.actions;
export default gameValuesSlice.reducer;
