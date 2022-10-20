import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { Fonts } from "../constants/Fonts";
import Logo from "../components/Logo";
import SignUpForm from "../components/SignUp/SignUpForm";
import LoginScreen from "./LoginScreen";
import Button from "../components/Button";
import { registerUser, validSignUpCredentials } from "../services/userService";

function SignUpScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();

  const register = async () => {
    const isValid = validSignUpCredentials(username, password, confirmPassword);
    if (isValid) {
      const isRegistered = await registerUser(username, password);
      console.log(isRegistered);
      if (isRegistered) {
        navigation.navigate(LoginScreen);
      } else return;
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
      <Logo logoContainer={styles.logo} logoText={styles.logoText} />
      <Text style={styles.text}>Register</Text>
      <SignUpForm
        usernameChange={usernameInputHandler}
        passwordChange={passwordInputHandler}
        confirmPasswordChange={confirmPasswordInputHandler}
      />
      <Button
        textStyle={styles.buttonText}
        onPress={register}
        value={"Register"}
      />
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
  buttonText: {
    marginHorizontal: 15,
    padding: 15,
    backgroundColor: Colors.color8,
    fontSize: Fonts.medium,
    fontWeight: "bold",
    margin: 15,
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
