import { useEffect, useLayoutEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import BottomStats from "../components/BottomStats";
import Header from "../components/Header/Header";
import PlayGrid from "../components/PlayGrid/PlayGrid";
import Tips from "../components/Tips";
import GestureRecognizer from "react-native-swipe-gestures";
import { onUndoButtonPress } from "../services/onUndoButtonPress";
import { checkGameOver } from "../services/checkGameOver";
import { bestScoreChecker } from "../services/bestScoreChecker";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../components/common/Colors";
import { useSelector, useDispatch } from "react-redux";
import { startGameValues } from "../redux/slices/gameValues";
import { updateBestScore } from "../redux/slices/bestScore";
import { startTimer } from "../redux/slices/timer";
import useReset from "../customHooks/useReset";
import useSwipe from "../customHooks/useSwipe";

function GameScreen() {
  const navigation = useNavigation();
  const [lose, setLose] = useState(false);
  const [pressedNew, setPressedNew] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState("");
  const { score } = useSelector((state) => state.score);
  const { bestScore } = useSelector((state) => state.bestScore);
  const { gameValues } = useSelector((state) => state.gameValues);
  const { timer } = useSelector((state) => state.timer);
  const { win } = useSelector((state) => state.win);
  const dispatch = useDispatch();
  useReset(pressedNew);
  useSwipe(swipeDirection);

  useLayoutEffect(() => {
    dispatch(startGameValues());
  }, []);

  useEffect(() => {
    setInterval(() => {
      dispatch(startTimer());
    }, 1000);
  }, []);

  const onNewPress = () => {
    if (pressedNew) {
      setPressedNew(false);
    } else {
      setPressedNew(true);
    }
  };

  const onUndoPress = () => {
    onUndoButtonPress();
  };

  const onSwipeUp = () => {
    setSwipeDirection("UP");
  };
  const onSwipeDown = () => {
    setSwipeDirection("DOWN");
  };
  const onSwipeLeft = () => {
    setSwipeDirection("LEFT");
  };
  const onSwipeRight = () => {
    setSwipeDirection("RIGHT");
  };

  useEffect(() => {
    setSwipeDirection("");
  }, [swipeDirection]);

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  useEffect(() => {
    if (win) {
      let time = timer;
      let isTrue = bestScoreChecker(score, bestScore);
      if (isTrue === true) {
        dispatch(updateBestScore(score));
      }
      navigation.navigate("RetryScreen", {
        text: "You Win!",
        time: time,
        onNew: onNewPress,
        onUndoPress: onUndoPress,
      });
    }
  }, [win]);

  useEffect(() => {
    let gameover = checkGameOver(gameValues);
    if (gameover === true) {
      setLose(true);
    }
  });

  useEffect(() => {
    if (lose) {
      let time = timer;
      let isTrue = bestScoreChecker(score, bestScore);
      if (isTrue === true) {
        dispatch(updateBestScore(score));
      }
      navigation.navigate("RetryScreen", {
        text: "Game Over!",
        time: time,
        onNew: onNewPress,
        onUndo: onUndoPress,
      });
    }
  }, [lose]);

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
