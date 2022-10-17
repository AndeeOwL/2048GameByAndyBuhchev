import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../components/common/Colors";
import { Fonts } from "../components/common/Fonts";
import LeaderboardList from "../components/Leaderboard/LeaderboardList";
import MainLogo from "../components/MainLogo";
import LoginScreen from "./LoginScreen";

function LeaderboardScreen() {
  const navigation = useNavigation();
  const login = () => {
    navigation.navigate(LoginScreen);
  };
  return (
    <View style={styles.rootContainer}>
      <MainLogo />
      <Text style={styles.title}>Leaderboard</Text>
      <Text style={styles.buttons} onPress={login}>
        Login
      </Text>
      <LeaderboardList />
    </View>
  );
}

export default LeaderboardScreen;

const styles = StyleSheet.create({
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
