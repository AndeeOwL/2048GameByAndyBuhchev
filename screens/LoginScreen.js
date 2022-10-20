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

function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const login = async () => {
    const result = await getLoginIsValidAnduserScore(username, password);
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
      <Text style={styles.text}>Login to play</Text>
      <LoginForm
        usernameChange={usernameInputHandler}
        passwordChange={passwordInputHandler}
      />
      <LoginButtons login={login} signUp={signUp} leaderboard={leaderboard} />
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
