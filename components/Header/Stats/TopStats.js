import { StyleSheet, View } from "react-native";
import Stat from "./Stat";

function TopStats() {
  return (
    <View style={styles.topStatsContainer}>
      <Stat text={"SCORE"} value={0} />
      <Stat text={"UNDO"} value={0} />
    </View>
  );
}

export default TopStats;

const styles = StyleSheet.create({
  topStatsContainer: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10,
  },
});
