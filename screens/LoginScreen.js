import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Colors } from "../components/common/Colors";
import { Fonts } from "../components/common/Fonts";
import LoginButtons from "../components/Login/LoginButtons";
import LoginForm from "../components/Login/LoginForm";
import MainLogo from "../components/MainLogo";
import score from "../redux/slices/score";
import GameScreen from "./GameScreen";
import LeaderboardScreen from "./LeaderboardScreen";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const login = async () => {
    try {
      const user = await AsyncStorage.getItem(username);
      if (user !== null) {
        const userObj = JSON.parse(user);
        if (userObj.password === password) {
          navigation.navigate("GameScreen", {
            username: username,
            password: password,
            score: userObj.score,
          });
        } else {
          Alert.alert("Invalid input", "Invalid password");
        }
      } else {
        Alert.alert("Invalid input", "Invalid username");
      }
    } catch (error) {
      Alert.alert("Invalid input", "Something went wrong try again");
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
      <MainLogo cStyle={styles.logo} />
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
