import { StyleSheet, View, Text } from "react-native";

function BottomStats() {
  return (
    <View style={styles.statsContainer}>
      <Text style={styles.statsText}>0 moves</Text>
      <Text style={styles.statsText}>0:10</Text>
    </View>
  );
}

export default BottomStats;

const styles = StyleSheet.create({
  statsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  statsText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#917c7c",
  },
});
