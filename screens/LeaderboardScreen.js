import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import { Colors } from "../components/common/Colors";
import { Fonts } from "../components/common/Fonts";
import LeaderboardList from "../components/Leaderboard/LeaderboardList";
import MainLogo from "../components/MainLogo";
import LoginScreen from "./LoginScreen";

function LeaderboardScreen() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const navigation = useNavigation();

  const login = () => {
    navigation.navigate(LoginScreen);
  };

  const getAllKeys = async () => {
    setLoading(true);
    let keys = [];
    let userArr = [];
    try {
      keys = await AsyncStorage.getAllKeys();
      keys.forEach(async (k) => {
        const usr = await AsyncStorage.getItem(k);
        const userObject = JSON.parse(usr);
        userArr.push(userObject);
      });
      setUsers(...[userArr]);
    } catch (e) {
      Alert.alert("Not found entries", "No users are registered yet");
    }
    const all = await AsyncStorage.getAllKeys();
    console.log(all);
    setLoading(false);
  };

  users.sort((u1, u2) =>
    u1.score < u2.score ? 1 : u1.score > u2.score ? -1 : 0
  );

  if (loading) {
    return (
      <View style={styles.rootContainer}>
        <ActivityIndicator size='large' />
      </View>
    );
  } else {
    return (
      <View style={styles.rootContainer}>
        <MainLogo />
        <Text style={styles.title}>Leaderboard</Text>
        <Text style={styles.buttons} onPress={login}>
          Login
        </Text>
        <Text style={styles.buttons} onPress={getAllKeys}>
          Load Leaderboard
        </Text>
        <LeaderboardList users={users} />
      </View>
    );
  }
}

export default LeaderboardScreen;

const styles = StyleSheet.create({
  activityRoot: {
    flex: 1,
    backgroundColor: Colors.color256,
    alignItems: "center",
    justifyContent: "center",
  },
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.color256,
    alignItems: "center",
  },
  title: {
    fontSize: Fonts.extraBig,
    fontWeight: "bold",
    marginBottom: 15,
  },
  buttons: {
    margin: 15,
    padding: 15,
    backgroundColor: Colors.color8,
    fontSize: Fonts.small,
    fontWeight: "bold",
  },
});
