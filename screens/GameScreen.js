import { useEffect, useLayoutEffect, useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import BottomStats from "../components/BottomStats";
import Header from "../components/Header/Header";
import PlayGrid from "../components/PlayGrid/PlayGrid";
import Tips from "../components/Tips";
import GestureRecognizer from "react-native-swipe-gestures";
import { checkGameOver } from "../services/checkGameOver";
import { bestScoreChecker } from "../services/bestScoreChecker";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../components/common/Colors";
import { useSelector, useDispatch } from "react-redux";
import { startGameValues, updateGameValues } from "../redux/slices/gameValues";
import { startTimer } from "../redux/slices/timer";
import useReset from "../customHooks/useReset";
import useSwipe from "../customHooks/useSwipe";
import { Fonts } from "../components/common/Fonts";
import LoginScreen from "./LoginScreen";
import LeaderboardScreen from "./LeaderboardScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

function GameScreen({ route }) {
  const navigation = useNavigation();
  const [lose, setLose] = useState(false);
  const [pressedNew, setPressedNew] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState("");
  const { score } = useSelector((state) => state.score);
  const { gameValues } = useSelector((state) => state.gameValues);
  const { timer } = useSelector((state) => state.timer);
  const { win } = useSelector((state) => state.win);
  const { previusBoard } = useSelector((state) => state.previusBoardState);
  const dispatch = useDispatch();
  useReset(pressedNew);
  useSwipe(swipeDirection);

  const logout = () => {
    navigation.navigate(LoginScreen);
  };

  const leaderboard = () => {
    navigation.navigate(LeaderboardScreen);
  };

  useLayoutEffect(() => {
    dispatch(startGameValues());
  }, []);

  useEffect(() => {
    setInterval(() => {
      dispatch(startTimer());
    }, 1000);
  }, []);

  const onNewPress = () => {
    setLose(false);
    if (pressedNew) {
      setPressedNew(false);
    } else {
      setPressedNew(true);
    }
  };

  const onUndoPress = () => {
    dispatch(updateGameValues(previusBoard));
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
    gameLost();
  }, [swipeDirection]);

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  useEffect(() => {
    if (win) {
      let time = timer;
      let isTrue = bestScoreChecker(score, route.params.score);
      if (isTrue === true) {
        setNewBestScore(score);
      }
      navigation.navigate("RetryScreen", {
        text: "You Win!",
        time: time,
        onNew: onNewPress,
        onUndo: onUndoPress,
        score: route.params.score,
      });
    }
  }, [win]);

  const setNewBestScore = async (score) => {
    try {
      await AsyncStorage.setItem(
        route.params.username,
        JSON.stringify({
          username: route.params.username.toString(),
          password: route.params.password,
          score: score,
        })
      );
      const object = await AsyncStorage.getItem(route.params.username);
      console.log(object);
    } catch (e) {
      Alert.alert("Something went wrong setting new best score to user");
    }
  };

  const gameLost = () => {
    let gameover = checkGameOver(gameValues);
    if (gameover === true) {
      setLose(true);
    }
  };

  useEffect(() => {
    if (lose) {
      let time = timer;
      let isTrue = bestScoreChecker(score, route.params.score);
      if (isTrue === true) {
        setObjectValue(score);
      }
      navigation.navigate("RetryScreen", {
        text: "Game Over!",
        time: time,
        onNew: onNewPress,
        onUndo: onUndoPress,
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
        <Text style={styles.registerbutton} onPress={leaderboard}>
          Leaderboard
        </Text>
        <Text style={styles.registerbutton} onPress={logout}>
          Logout
        </Text>
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
  registerbutton: {
    marginHorizontal: 15,
    padding: 15,
    backgroundColor: Colors.color8,
    fontSize: Fonts.medium,
    fontWeight: "bold",
    margin: 15,
  },
});
