import { useDispatch, useSelector } from "react-redux";
import { updateGameValues } from "../redux/slices/gameValues";
import { addScore } from "../redux/slices/score";
import { addMoves } from "../redux/slices/moves";
import { changeBoardState } from "../redux/slices/previusBoardState";
import { changeDirection } from "../redux/slices/direction";
import { changeWin } from "../redux/slices/win";
import { changeIsNew } from "../redux/slices/isNew";
import { changeIsMerged } from "../redux/slices/isMerged";
import { changeSteps } from "../redux/slices/steps";
import { upMovement } from "../services/movements/upMovement";
import { downMovement } from "../services/movements/downMovement";
import { rightMovement } from "../services/movements/rightMovement";
import { leftMovement } from "../services/movements/leftMovement";
import { useEffect } from "react";

export default function useSwipe(swipeDirection) {
  const dispatch = useDispatch();
  const { gameValues } = useSelector((state) => state.gameValues);
  const { score } = useSelector((state) => state.score);
  let result = [];
  useEffect(() => {
    switch (swipeDirection) {
      case "UP":
        dispatch(changeBoardState(gameValues));
        result = upMovement([...gameValues], score);
        dispatch(updateGameValues(result[0]));
        dispatch(changeWin(result[1]));
        dispatch(addScore(result[2]));
        dispatch(changeIsNew(result[3]));
        dispatch(changeIsMerged(result[4]));
        dispatch(changeSteps(result[5]));
        dispatch(addMoves());
        dispatch(changeDirection("UP"));
        break;
      case "DOWN":
        dispatch(changeBoardState(gameValues));
        result = downMovement([...gameValues], score);
        dispatch(updateGameValues(result[0]));
        dispatch(changeWin(result[1]));
        dispatch(addScore(result[2]));
        dispatch(changeIsNew(result[3]));
        dispatch(changeIsMerged(result[4]));
        dispatch(changeSteps(result[5]));
        dispatch(addMoves());
        dispatch(changeDirection("DOWN"));
        break;
      case "RIGHT":
        dispatch(changeBoardState(gameValues));
        result = rightMovement([...gameValues], score);
        dispatch(updateGameValues(result[0]));
        dispatch(changeWin(result[1]));
        dispatch(addScore(result[2]));
        dispatch(changeIsNew(result[3]));
        dispatch(changeIsMerged(result[4]));
        dispatch(changeSteps(result[5]));
        dispatch(addMoves());
        dispatch(changeDirection("RIGHT"));
        break;
      case "LEFT":
        dispatch(changeBoardState(gameValues));
        result = leftMovement([...gameValues], score);
        dispatch(updateGameValues(result[0]));
        dispatch(changeWin(result[1]));
        dispatch(addScore(result[2]));
        dispatch(changeIsNew(result[3]));
        dispatch(changeIsMerged(result[4]));
        dispatch(changeSteps(result[5]));
        dispatch(addMoves());
        dispatch(changeDirection("LEFT"));
        break;
    }
  }, [swipeDirection]);
}
