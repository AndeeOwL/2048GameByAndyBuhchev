import { configureStore } from "@reduxjs/toolkit";
import gameValuesReducer from "./slices/gameValues";
import scoreReducer from "./slices/score";
import movesReducer from "./slices/moves";
import directionReducer from "./slices/direction";
import isMergedReducer from "./slices/isMerged";
import isNewReducer from "./slices/isNew";
import stepsReducer from "./slices/steps";
import winReducer from "./slices/win";
import timerReducer from "./slices/timer";

export default configureStore({
  reducer: {
    gameValues: gameValuesReducer,
    score: scoreReducer,
    moves: movesReducer,
    direction: directionReducer,
    isMerged: isMergedReducer,
    isNew: isNewReducer,
    steps: stepsReducer,
    win: winReducer,
    timer: timerReducer,
  },
});
