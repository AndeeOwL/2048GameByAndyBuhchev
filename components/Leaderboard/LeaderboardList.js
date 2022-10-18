import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../common/Colors";
import { Fonts } from "../common/Fonts";

function LeaderboardList(props) {
  return (
    <ScrollView style={styles.scrollContainer}>
      {props.users.map((user) => (
        <>
          <View style={styles.userStatsContainer}>
            <Text style={styles.userStats}>user:{user.username}</Text>
            <Text style={styles.userStats}>score:{user.score}</Text>
          </View>
        </>
      ))}
    </ScrollView>
  );
}

export default LeaderboardList;

const styles = StyleSheet.create({
  userStats: {
    fontSize: Fonts.medium,
    color: Colors.darkBrown,
  },
  userStatsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.color16,
    flexDirection: "row",
    padding: 5,
    margin: 5,
    width: 350,
  },
  scrollContainer: {
    marginHorizontal: 15,
    marginBottom: 50,
  },
});
