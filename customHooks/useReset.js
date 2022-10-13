import { resetGameValues, startGameValues } from "../redux/slices/gameValues";
import { resetScore } from "../redux/slices/score";
import { resetMoves } from "../redux/slices/moves";
import { resetDirection } from "../redux/slices/direction";
import { resetWin } from "../redux/slices/win";
import { resetIsNew } from "../redux/slices/isNew";
import { resetIsMerged } from "../redux/slices/isMerged";
import { resetSteps } from "../redux/slices/steps";
import { resetTimer } from "../redux/slices/timer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function useReset(pressed) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetGameValues());
    dispatch(startGameValues());
    dispatch(resetScore());
    dispatch(resetMoves());
    dispatch(resetDirection());
    dispatch(resetSteps());
    dispatch(resetIsMerged());
    dispatch(resetIsNew());
    dispatch(resetWin());
    dispatch(resetTimer());
  }, [pressed]);
}
