import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../common/Colors";
import { Fonts } from "../common/Fonts";

function LeaderboardList() {
  return (
    <ScrollView>
      <View style={styles.userStatsContainer}>
        <Text style={styles.userStats}>1.userOne </Text>
        <Text style={styles.userStats}>score:4000</Text>
      </View>
    </ScrollView>
  );
}

export default LeaderboardList;

const styles = StyleSheet.create({
  userStats: {
    fontSize: Fonts.medium,
    color: Colors.darkBrown,
    padding: 10,
  },
  userStatsContainer: {
    backgroundColor: Colors.color16,
    flexDirection: "row",
  },
});
