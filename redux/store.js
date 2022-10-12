import { configureStore } from "@reduxjs/toolkit";
import bestScoreReducer from "./slices/bestScore";
import gameValuesReducer from "./slices/gameValues";
import scoreReducer from "./slices/score";
import movesReducer from "./slices/moves";
import directionReducer from "./slices/direction";
import isMergedReducer from "./slices/isMerged";
import isNewReducer from "./slices/isNew";
import stepsReducer from "./slices/steps";
import timerReducer from "./slices/timer";
import winReducer from "./slices/win";

export default configureStore({
  reducer: {
    gameValues: gameValuesReducer,
    score: scoreReducer,
    bestScore: bestScoreReducer,
    moves: movesReducer,
    direction: directionReducer,
    isMerged: isMergedReducer,
    isNew: isNewReducer,
    steps: stepsReducer,
    timer: timerReducer,
    win: winReducer,
  },
});
