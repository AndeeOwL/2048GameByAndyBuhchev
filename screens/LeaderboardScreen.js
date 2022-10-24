import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { Fonts } from "../constants/Fonts";
import LeaderboardList from "../components/Leaderboard/LeaderboardList";
import LoginScreen from "./LoginScreen";
import Button from "../components/Button";
import Logo from "../components/Logo";
import { useTranslation } from "react-i18next";
import i18n from "../localization/i18n";

function LeaderboardScreen() {
  const { t, i18n } = useTranslation();
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
      Alert.alert(t("noEntries"), t("noUsersYet"));
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
        <Logo logoContainer={styles.logo} logoText={styles.logoText} />
        <Text style={styles.title}>{t("leaderboardButton")}</Text>
        <Button
          textStyle={styles.buttons}
          onPress={login}
          value={t("loginButton")}
        />
        <Button
          textStyle={styles.buttons}
          onPress={getAllKeys}
          value={t("loadLeaderboard")}
        />
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
