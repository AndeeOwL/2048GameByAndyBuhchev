import { useEffect, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import BottomStats from "../components/BottomStats";
import Header from "../components/Header/Header";
import PlayGrid from "../components/PlayGrid/PlayGrid";
import Tips from "../components/Tips";
import GestureRecognizer from "react-native-swipe-gestures";
import { onUndoButtonPress } from "../services/onUndoButtonPress";
import { checkGameOver } from "../services/checkGameOver";
import { leftMovement } from "../services/movements/leftMovement";
import { rightMovement } from "../services/movements/rightMovement";
import { upMovement } from "../services/movements/upMovement";
import { downMovement } from "../services/movements/downMovement";
import { bestScoreChecker } from "../services/bestScoreChecker";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../components/common/Colors";
import { useSelector, useDispatch } from "react-redux";
import {
  resetGameValues,
  startGameValues,
  updateGameValues,
} from "../redux/slices/gameValues";
import { addScore, resetScore } from "../redux/slices/score";
import { updateBestScore } from "../redux/slices/bestScore";
import { addMoves, resetMoves } from "../redux/slices/moves";
import { resetTimer, startTimer } from "../redux/slices/timer";
import { changeDirection, resetDirection } from "../redux/slices/direction";
import { changeWin, resetWin } from "../redux/slices/win";
import { changeIsNew, resetIsNew } from "../redux/slices/isNew";
import { changeIsMerged, resetIsMerged } from "../redux/slices/isMerged";
import { changeSteps, resetSteps } from "../redux/slices/steps";

function GameScreen() {
  const navigation = useNavigation();
  const { gameValues } = useSelector((state) => state.gameValues);
  const { score } = useSelector((state) => state.score);
  const { bestScore } = useSelector((state) => state.bestScore);
  const { win } = useSelector((state) => state.win);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(startGameValues());
  }, []);
  useEffect(() => {
    setInterval(() => {
      dispatch(startTimer());
    }, 1000);
  }, []);

  const onNewPress = () => {
    dispatch(resetGameValues());
    dispatch(startGameValues());
    dispatch(resetScore());
    dispatch(resetMoves());
    dispatch(resetTimer());
    dispatch(resetDirection());
    dispatch(resetSteps());
    dispatch(resetIsMerged());
    dispatch(resetIsNew());
    dispatch(resetWin());
  };

  const onUndoPress = () => {
    onUndoButtonPress();
  };

  const onSwipeUp = () => {
    let result = upMovement([...gameValues], score);
    dispatch(updateGameValues(result[0]));
    dispatch(changeWin(result[1]));
    dispatch(addScore(result[2]));
    dispatch(changeIsNew(result[3]));
    dispatch(changeIsMerged(result[4]));
    dispatch(changeSteps(result[5]));
    dispatch(addMoves());
    dispatch(changeDirection("UP"));
  };
  const onSwipeDown = () => {
    let result = downMovement([...gameValues], score);
    dispatch(updateGameValues(result[0]));
    dispatch(changeWin(result[1]));
    dispatch(addScore(result[2]));
    dispatch(changeIsNew(result[3]));
    dispatch(changeIsMerged(result[4]));
    dispatch(changeSteps(result[5]));
    dispatch(addMoves());
    dispatch(changeDirection("DOWN"));
  };
  const onSwipeLeft = () => {
    let result = leftMovement([...gameValues], score);
    dispatch(updateGameValues(result[0]));
    dispatch(changeWin(result[1]));
    dispatch(addScore(result[2]));
    dispatch(changeIsNew(result[3]));
    dispatch(changeIsMerged(result[4]));
    dispatch(changeSteps(result[5]));
    dispatch(addMoves());
    dispatch(changeDirection("LEFT"));
  };
  const onSwipeRight = () => {
    let result = rightMovement([...gameValues], score);
    dispatch(updateGameValues(result[0]));
    dispatch(changeWin(result[1]));
    dispatch(addScore(result[2]));
    dispatch(changeIsNew(result[3]));
    dispatch(changeIsMerged(result[4]));
    dispatch(changeSteps(result[5]));
    dispatch(addMoves());
    dispatch(changeDirection("RIGHT"));
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  useEffect(() => {
    if (win) {
      checkBestScore();
      navigation.navigate("RetryScreen", {
        text: "You Win!",
        onNewPress: onNewPress,
        onUndoPress: onUndoPress,
      });
    }
  }, [win]);

  // useEffect(() => {
  //   let gameover = checkGameOver(gameValues);
  //   if (gameover === true) {

  //     let isTrue = bestScoreChecker(score, bestScore);
  //     if (isTrue=== true) {
  //       dispatch(updateBestScore(score));
  //     }

  //     navigation.navigate("RetryScreen", {
  //       text: "Game Over!",
  //       onNew: onNewPress,
  //       onUndo: onUndoPress,
  //     });
  //   }
  // });

  return (
    <View style={styles.rootContainer}>
      <Header
        onNewPress={onNewPress}
        onUndoPress={onUndoPress}
        score={score}
        bestScore={bestScore}
      />
      <Tips />
      <GestureRecognizer
        config={config}
        onSwipeUp={onSwipeUp}
        onSwipeDown={onSwipeDown}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
        style={styles.gridContainer}
      >
        <PlayGrid />
      </GestureRecognizer>
      <BottomStats />
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.mediumWhite,
    marginHorizontal: 15,
  },
  gridContainer: {
    flex: 1.5,
    borderRadius: 5,
    backgroundColor: Colors.lightBrown,

    overflow: "hidden",
  },
});
