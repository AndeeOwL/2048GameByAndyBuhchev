import { useCallback, useState } from "react";
import { View, StyleSheet } from "react-native";
import BottomStats from "../components/BottomStats";
import Header from "../components/Header/Header";
import PlayGrid from "../components/PlayGrid/PlayGrid";
import Tips from "../components/Tips";
import GestureRecognizer from "react-native-swipe-gestures";
import { onNewButtonPress } from "../services/onNewButtonPress";
import { onUndoButtonPress } from "../services/onUndoButtonPress";
import { checkGameOver } from "../services/checkGameOver";
import { leftMovement } from "../services/movements/leftMovement";
import { rightMovement } from "../services/movements/rightMovement";
import { upMovement } from "../services/movements/upMovement";
import { downMovement } from "../services/movements/downMovement";
import { bestScoreChecker } from "../services/bestScoreChecker";

function GameScreen() {
  const [gameValues, setGameValues] = useState([
    [0, 0, 0, 2],
    [0, 0, 0, 0],
    [2, 0, 0, 0],
    [0, 0, 0, 0],
  ]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [timer, setTimer] = useState("00:00");
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);

  const isTrue = useCallback(() => {
    checkGameOver(gameValues);
    if (isTrue) {
      setLose(false);
    }
  }, [lose]);

  const onNewPress = () => {
    let reset = onNewButtonPress();
    setGameValues(reset[0]);
    setMoves(reset[1]);
    setScore(reset[2]);
    setTimer(reset[3]);
    setWin(reset[4]);
    setLose(reset[5]);
  };

  const onUndoPress = () => {
    onUndoButtonPress();
  };

  const onSwipeUp = () => {
    let result = upMovement(gameValues, score);
    setGameValues(result[0]);
    setScore(result[1]);
    setWin(result[2]);
    setMoves(moves + 1);
  };
  const onSwipeDown = () => {
    let result = downMovement(gameValues, score);
    setGameValues(result[0]);
    setScore(result[1]);
    setWin(result[2]);
    setMoves(moves + 1);
  };
  const onSwipeLeft = () => {
    let result = leftMovement(gameValues, score);
    setGameValues(result[0]);
    setScore(result[1]);
    setWin(result[2]);
    setMoves(moves + 1);
  };
  const onSwipeRight = () => {
    let result = rightMovement(gameValues, score);
    setGameValues(result[0]);
    setScore(result[1]);
    setWin(result[2]);
    setMoves(moves + 1);
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  checkBestScore = () => {
    let isTrue = bestScoreChecker(score, bestScore, win, lose);
    if (isTrue) {
      setBestScore(score);
    }
  };

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
        <PlayGrid gameValues={gameValues} />
      </GestureRecognizer>
      <BottomStats moves={moves} timer={timer} />
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#f7f5f0",
    marginHorizontal: 15,
  },
  gridContainer: {
    flex: 1.5,
    borderRadius: 5,
    backgroundColor: "#917c7c",
    padding: 5,
  },
});
