import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useSelector } from "react-redux";
import { Colors } from "../components/common/Colors";
import { Fonts } from "../components/common/Fonts";
import Button from "../components/Header/Buttons/Button";
import PlayGrid from "../components/PlayGrid/PlayGrid";

function RetryScreen({ route }) {
  const { score } = useSelector((state) => state.score);
  const { moves } = useSelector((state) => state.moves);
  const { timer } = useSelector((state) => state.timer);
  const { gameValues } = useSelector((state) => state.gameValues);

  const navigation = useNavigation();

  const onPlayAgainPress = () => {
    route.params.onNew();
    navigation.navigate("GameScreen");
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.topTextContainer}>
        <Text style={styles.topTextConditional}>{route.params.text}</Text>
        <Text style={styles.topText}>
          You earned {score} points with {moves} moves in {timer}.
        </Text>
      </View>
      <PlayGrid gameValues={gameValues} />

      <Pressable style={styles.bottomButtonsContainer}>
        <Button onPress={onPlayAgainPress} value={"Play Again"} />
        <Button onPress={route.params.onUndo} value={"Undo"} />
      </Pressable>
    </View>
  );
}

export default RetryScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.mediumWhite,
    marginHorizontal: 15,
  },
  topTextContainer: {
    flex: 1,
    marginTop: 125,
    alignItems: "center",
    marginHorizontal: 15,
  },
  topTextConditional: {
    fontSize: Fonts.extraBig,
    fontWeight: "bold",
  },
  topText: {
    fontSize: Fonts.medium,
    fontWeight: "bold",
  },
  bottomButtonsContainer: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 75,
    marginTop: 45,
    paddingVertical: 25,
  },
});
