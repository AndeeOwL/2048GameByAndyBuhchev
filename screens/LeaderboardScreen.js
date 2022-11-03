import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { Fonts } from "../constants/Fonts";
import LeaderboardList from "../components/Leaderboard/LeaderboardList";
import LoginScreen from "./LoginScreen";
import Button from "../components/Button";
import Logo from "../components/Logo";
import { useTranslation } from "react-i18next";
import i18n from "../localization/i18n";
import { getLeaderboard, sortUsers } from "../services/leaderboardService";

function LeaderboardScreen() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const navigation = useNavigation();

  const login = () => {
    navigation.navigate(LoginScreen);
  };

  const loadLeaderboard = async () => {
    setLoading(true);
    const usersResult = await getLeaderboard(t("noEntries"), t("noUsersYet"));
    const sortedUsers = sortUsers(usersResult);
    setUsers(sortedUsers);
    setLoading(false);
  };

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
          onPress={loadLeaderboard}
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
