import { useState } from "react";
import { View, StyleSheet } from "react-native";
import BottomStats from "../components/BottomStats";
import Header from "../components/Header/Header";
import PlayGrid from "../components/PlayGrid/PlayGrid";
import Tips from "../components/Tips";

function GameScreen() {
  const [gameValues, setGameValues] = useState([
    [0, 0, 0, 2],
    [0, 0, 0, 0],
    [2, 0, 0, 0],
    [0, 0, 0, 0],
  ]);
  return (
    <View style={styles.rootContainer}>
      <Header />
      <Tips />
      <PlayGrid gameValues={gameValues} />
      <BottomStats />
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
});
