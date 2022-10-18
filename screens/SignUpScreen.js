import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Colors } from "../components/common/Colors";
import { Fonts } from "../components/common/Fonts";
import MainLogo from "../components/MainLogo";
import RegisterButton from "../components/SignUp/RegisterButton";
import SignUpForm from "../components/SignUp/SignUpForm";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginScreen from "./LoginScreen";

function SignUpScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();

  const register = async () => {
    const isUsernameValid = username.length >= 4;
    const isPasswordValid =
      password.length >= 8 && password === confirmPassword;

    if (!isUsernameValid) {
      Alert.alert(
        "Invalid input",
        "Username must be 4 or more characters and should not be taken!"
      );
      return;
    }
    if (!isPasswordValid) {
      Alert.alert(
        "Invalid input",
        "Password must be 8 or more characters and should match confirmed password!"
      );
      return;
    }

    try {
      const name = await AsyncStorage.getItem(username);

      if (name === null) {
        await AsyncStorage.setItem(
          username,
          JSON.stringify({
            username: username,
            password: password,
            score: 0,
          })
        );
        navigation.navigate(LoginScreen);
      } else {
        Alert.alert("Invalid input", "Username taken !");
        return;
      }
    } catch (error) {
      Alert.alert("Invalid input", "Username taken !");
    }
  };

  const usernameInputHandler = (enteredText) => {
    setUsername(enteredText);
  };

  const passwordInputHandler = (enteredText) => {
    setPassword(enteredText);
  };

  const confirmPasswordInputHandler = (enteredText) => {
    setConfirmPassword(enteredText);
  };

  return (
    <View style={styles.rootContainer}>
      <MainLogo />
      <Text style={styles.text}>Register</Text>
      <SignUpForm
        usernameChange={usernameInputHandler}
        passwordChange={passwordInputHandler}
        confirmPasswordChange={confirmPasswordInputHandler}
      />
      <RegisterButton register={register} />
    </View>
  );
}

export default SignUpScreen;

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
