import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export async function getLeaderboard(errorNoEntries, errorNoUsersYet) {
  let keys = [];
  let userArr = [];
  try {
    keys = await AsyncStorage.getAllKeys();
    keys.forEach(async (k) => {
      const usr = await AsyncStorage.getItem(k);
      const userObject = JSON.parse(usr);
      userArr.push(userObject);
    });
  } catch (e) {
    Alert.alert(errorNoEntries, errorNoUsersYet);
  }
  const all = await AsyncStorage.getAllKeys();
  console.log(all);
  return userArr;
}

export function sortUsers(users) {
  users.sort((u1, u2) =>
    u1.score < u2.score ? 1 : u1.score > u2.score ? -1 : 0
  );
  return [...users];
}
