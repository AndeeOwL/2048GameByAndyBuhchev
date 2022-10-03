import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Button from "../components/Header/Buttons/Button";
import PlayGrid from "../components/PlayGrid/PlayGrid";

function RetryScreen({ route }) {
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
          You earned {route.params.score} points with {route.params.moves} moves
          in {route.params.time}.
        </Text>
      </View>
      <PlayGrid gameValues={route.params.values} />

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
    backgroundColor: "#f7f5f0",
    marginHorizontal: 15,
  },
  topTextContainer: {
    flex: 1,
    marginTop: 125,
    alignItems: "center",
    marginHorizontal: 15,
  },
  topTextConditional: {
    fontSize: 36,
    fontWeight: "bold",
  },
  topText: {
    fontSize: 22,
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
