import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import PlayGrid from "../components/PlayGrid/PlayGrid";
import { Colors } from "../constants/Colors";
import { Fonts } from "../constants/Fonts";
import { useTranslation } from "react-i18next";
import i18n from "../localization/i18n";

function RetryScreen({ route }) {
  const { t, i18n } = useTranslation();
  const { score } = useSelector((state) => state.score);
  const { moves } = useSelector((state) => state.moves);
  const { gameValues } = useSelector((state) => state.gameValues);
  const username = route.params.username;
  const password = route.params.password;

  const navigation = useNavigation();

  const onPlayAgainPress = () => {
    navigation.navigate("GameScreen", {
      username: username,
      password: password,
      score: route.params.score,
    });
    route.params.onNew();
  };
  const onUndoPress = () => {
    navigation.navigate("GameScreen", {
      username: username,
      password: password,
      score: route.params.score,
    });
    route.params.onUndo();
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.topTextContainer}>
        <Text style={styles.topTextConditional}>{route.params.text}</Text>
        <Text style={styles.topText}>
          {t("youEarned")} {score} {t("score")} {t("with")} {moves} {t("moves")}{" "}
          {t("in")} {route.params.time} {t("seconds")}.
        </Text>
      </View>
      <PlayGrid gameValues={gameValues} />
      <View style={styles.bottomButtonsContainer}>
        <Button
          buttonStyle={styles.bottomButtonsContainer}
          textStyle={styles.buttonText}
          onPress={onPlayAgainPress}
          value={t("playAgain")}
        />
        <Button
          buttonStyle={styles.bottomButtonsContainer}
          textStyle={styles.buttonText}
          onPress={onUndoPress}
          value={t("undo")}
        />
      </View>
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
    marginBottom: 25,
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    padding: 15,
    backgroundColor: Colors.color8,
    fontSize: Fonts.medium,
    fontWeight: "bold",
    margin: 15,
  },
});
