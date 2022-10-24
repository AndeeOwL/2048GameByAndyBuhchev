import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export async function getUser(username, globalError) {
  try {
    const user = await AsyncStorage.getItem(username);
    if (user !== null) {
      const userObj = await JSON.parse(user);
      return userObj;
    } else {
      return null;
    }
  } catch (error) {
    Alert.alert(globalError);
  }
}

export async function getLoginIsValidAnduserScore(
  username,
  password,
  errorUser,
  errorPass,
  globalError
) {
  let isValid = false;
  let score = 0;

  const user = await getUser(username, globalError);
  if (user !== null) {
    if (user.password === password) {
      isValid = true;
      score = user.score;
    } else {
      Alert.alert(errorPass);
    }
  } else {
    Alert.alert(errorUser);
  }
  return [isValid, score];
}

export async function setScoreForUser(username, password, score, errorScore) {
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
    Alert.alert(errorScore);
  }
}

export function validSignUpCredentials(
  username,
  password,
  confirmPassword,
  errorUser,
  errorPass
) {
  const isUsernameValid = username.length >= 3 && username.length <= 10;
  const isPasswordValid = password.length >= 8 && password === confirmPassword;

  if (!isUsernameValid) {
    Alert.alert(errorUser);
    return false;
  }
  if (!isPasswordValid) {
    Alert.alert(errorPass);
    return false;
  }
  return true;
}

export async function registerUser(
  username,
  password,
  usernameTaken,
  globalError
) {
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
      Alert.alert(usernameTaken);
      return false;
    }
  } catch (error) {
    Alert.alert(globalError);
  }
}
