import { useEffect, useLayoutEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import BottomStats from "../components/BottomStats";
import Header from "../components/Header/Header";
import PlayGrid from "../components/PlayGrid/PlayGrid";
import Tips from "../components/Tips";
import GestureRecognizer from "react-native-swipe-gestures";
import { checkGameOver } from "../services/checkGameOver";
import { bestScoreChecker } from "../services/bestScoreChecker";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constants/Colors";
import { useSelector, useDispatch } from "react-redux";
import { startGameValues, updateGameValues } from "../redux/slices/gameValues";
import { startTimer } from "../redux/slices/timer";
import useReset from "../customHooks/useReset";
import useSwipe from "../customHooks/useSwipe";
import { Fonts } from "../constants/Fonts";
import LoginScreen from "./LoginScreen";
import LeaderboardScreen from "./LeaderboardScreen";
import Button from "../components/Button";
import { setScoreForUser } from "../services/userService";

function GameScreen({ route }) {
  const navigation = useNavigation();
  const [lose, setLose] = useState(false);
  const [pressedNew, setPressedNew] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState("");
  const { score } = useSelector((state) => state.score);
  const { gameValues, previusBoard } = useSelector((state) => state.gameValues);
  const { timer } = useSelector((state) => state.timer);
  const { win } = useSelector((state) => state.win);
  const dispatch = useDispatch();
  useReset(pressedNew);
  useSwipe(swipeDirection);

  const logout = () => {
    navigation.navigate(LoginScreen);
  };

  const leaderboard = () => {
    navigation.navigate(LeaderboardScreen);
  };

  const onNewPress = () => {
    if (pressedNew) {
      setPressedNew(false);
    } else {
      setPressedNew(true);
    }
    setLose(false);
  };

  const onUndoPress = () => {
    dispatch(updateGameValues(previusBoard));
    setLose(false);
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

  const gameLost = () => {
    let gameover = checkGameOver(gameValues);
    if (gameover === true) {
      setLose(true);
    }
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  useLayoutEffect(() => {
    dispatch(startGameValues());
  }, []);

  const addSecond = () => {
    dispatch(startTimer());
  };

  useLayoutEffect(() => {
    let intervalId = setInterval(addSecond, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    setSwipeDirection("");
    gameLost();
  }, [swipeDirection]);

  useEffect(() => {
    if (win) {
      let time = timer;
      let isTrue = bestScoreChecker(score, route.params.score);
      if (isTrue === true) {
        setScoreForUser(route.params.username, route.params.password, score);
      }
      navigation.navigate("RetryScreen", {
        text: "You Win!",
        time: time,
        onNew: onNewPress,
        onUndo: onUndoPress,
        username: route.params.username,
        password: route.params.password,
        score: route.params.score,
      });
    }
  }, [win]);

  useEffect(() => {
    if (lose) {
      let time = timer;
      let isTrue = bestScoreChecker(score, route.params.score);
      if (isTrue === true) {
        setScoreForUser(route.params.username, route.params.password, score);
      }
      navigation.navigate("RetryScreen", {
        text: "Game Over!",
        time: time,
        onNew: onNewPress,
        onUndo: onUndoPress,
        username: route.params.username,
        password: route.params.password,
        score: route.params.score,
      });
    }
  }, [lose]);

  return (
    <View style={styles.rootContainer}>
      <Header
        onNewPress={onNewPress}
        onUndoPress={onUndoPress}
        score={score}
        bestScore={route.params.score}
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
      <View style={styles.buttons}>
        <Button
          textStyle={styles.buttonText}
          onPress={leaderboard}
          value={"Leaderboard"}
        />
        <Button
          textStyle={styles.buttonText}
          onPress={logout}
          value={"Logout"}
        />
      </View>
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
    flex: 2,
    borderRadius: 5,
    backgroundColor: Colors.lightBrown,
    overflow: "hidden",
  },
  buttons: {
    flexDirection: "row",
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    marginHorizontal: 15,
    padding: 15,
    backgroundColor: Colors.color8,
    fontSize: Fonts.medium,
    fontWeight: "bold",
    margin: 15,
  },
});
