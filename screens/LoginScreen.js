import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { Fonts } from "../constants/Fonts";
import LoginButtons from "../components/Login/LoginButtons";
import LoginForm from "../components/Login/LoginForm";
import Logo from "../components/Logo";
import LeaderboardScreen from "./LeaderboardScreen";
import SignUpScreen from "./SignUpScreen";
import { getLoginIsValidAnduserScore } from "../services/userService";
import { useTranslation } from "react-i18next";
import i18n from "../localization/i18n";
import ToggleSwitch from "rn-toggle-switch";

function LoginScreen() {
  const { t, i18n } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const login = async () => {
    const result = await getLoginIsValidAnduserScore(
      username,
      password,
      t("invalidUsername"),
      t("invalidPassword"),
      t("globalError")
    );
    if (result[0] === true) {
      navigation.navigate("GameScreen", {
        username: username,
        password: password,
        score: result[1],
      });
    }
  };

  const signUp = () => {
    navigation.navigate(SignUpScreen);
  };

  const leaderboard = () => {
    navigation.navigate(LeaderboardScreen);
  };

  const usernameInputHandler = (enteredText) => {
    setUsername(enteredText);
  };

  const passwordInputHandler = (enteredText) => {
    setPassword(enteredText);
  };

  return (
    <View style={styles.rootContainer}>
      <Logo logoContainer={styles.logo} logoText={styles.logoText} />
      <Text style={styles.text}>{t("loginText")}</Text>
      <LoginForm
        usernameChange={usernameInputHandler}
        passwordChange={passwordInputHandler}
      />
      <LoginButtons login={login} signUp={signUp} leaderboard={leaderboard} />
      <ToggleSwitch
        text={{
          on: i18n.language,
          off: i18n.language,
          activeTextColor: "black",
          inactiveTextColor: "black",
        }}
        textStyle={{ fontWeight: "bold" }}
        color={{
          indicator: "white",
          active: Colors.color1024,
          inactive: Colors.color32,
          activeBorder: "black",
          inactiveBorder: "black",
        }}
        active={true}
        disabled={false}
        width={80}
        radius={25}
        onValueChange={() => {
          if (i18n.language === "EN") {
            i18n.changeLanguage("BG");
          } else {
            i18n.changeLanguage("EN");
          }
        }}
      />
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.color256,
    alignItems: "center",
  },
  text: {
    color: Colors.darkBrown,
    fontSize: Fonts.big,
    fontWeight: "bold",
  },
  logo: {
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: Colors.color1024,
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontSize: Fonts.extraBig,
    fontWeight: "bold",
  },
});
