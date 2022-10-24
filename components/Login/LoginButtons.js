import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { Fonts } from "../../constants/Fonts";
import Button from "../Button";
import { useTranslation } from "react-i18next";
import i18n from "../../localization/i18n";

function LoginButtons(props) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <View style={styles.buttonsContainer}>
        <Button
          textStyle={styles.buttons}
          onPress={props.login}
          value={t("loginButton")}
        />
        <Button
          textStyle={styles.buttons}
          onPress={props.signUp}
          value={t("signUpButton")}
        />
      </View>
      <View>
        <Button
          textStyle={styles.buttons}
          onPress={props.leaderboard}
          value={t("leaderboardButton")}
        />
      </View>
    </>
  );
}

export default LoginButtons;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
  },
  buttons: {
    margin: 15,
    padding: 15,
    backgroundColor: Colors.color8,
    fontSize: Fonts.small,
    fontWeight: "bold",
  },
});
