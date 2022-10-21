import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export async function getUser(username) {
  try {
    const user = await AsyncStorage.getItem(username);
    if (user !== null) {
      const userObj = await JSON.parse(user);
      return userObj;
    } else {
      return null;
    }
  } catch (error) {
    Alert.alert("Something went wrong try again");
  }
}

export async function getLoginIsValidAnduserScore(username, password) {
  let isValid = false;
  let score = 0;

  const user = await getUser(username);
  if (user !== null) {
    if (user.password === password) {
      isValid = true;
      score = user.score;
    } else {
      Alert.alert("Invalid password");
    }
  } else {
    Alert.alert("Invalid username");
  }
  return [isValid, score];
}

export async function setScoreForUser(username, password, score) {
  try {
    console.log(username);
    await AsyncStorage.setItem(
      username,
      JSON.stringify({
        username: username.toString(),
        password: password,
        score: score,
      })
    );
    const object = await AsyncStorage.getItem(username);
    console.log(object);
  } catch (e) {
    Alert.alert("Something went wrong setting new best score to user");
  }
}

export function validSignUpCredentials(username, password, confirmPassword) {
  const isUsernameValid = username.length >= 3 && username.length <= 10;
  const isPasswordValid = password.length >= 8 && password === confirmPassword;

  if (!isUsernameValid) {
    Alert.alert(
      "Username must be between 3 and 10 characters and should not be taken!"
    );
    return false;
  }
  if (!isPasswordValid) {
    Alert.alert(
      "Password must be 8 or more characters and should match confirmed password!"
    );
    return false;
  }
  return true;
}

export async function registerUser(username, password) {
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
      return true;
    } else {
      Alert.alert("Username taken !");
      return false;
    }
  } catch (error) {
    Alert.alert("Something went wrong,try again");
  }
}
