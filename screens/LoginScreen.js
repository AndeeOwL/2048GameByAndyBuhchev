import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../components/common/Colors";
import { Fonts } from "../components/common/Fonts";
import LoginButtons from "../components/Login/LoginButtons";
import LoginForm from "../components/Login/LoginForm";
import MainLogo from "../components/MainLogo";
import GameScreen from "./GameScreen";
import LeaderboardScreen from "./LeaderboardScreen";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const login = () => {
    // const isUsernameValid = username is contained in the users
    // const isPasswordValid = password matches the username

    // if (!isUsernameValid) {
    //   Alert.alert(
    //     "Invalid input",
    //     "Username is not registered !"
    //   );
    //   return;
    // }
    // if (!isPasswordValid) {
    //   Alert.alert(
    //     "Invalid input",
    //     "Incorrect password !"
    //   );
    //   return;
    // }

    navigation.navigate(GameScreen);
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
      <MainLogo />
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
});
