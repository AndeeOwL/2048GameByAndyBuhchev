import { StyleSheet, View } from "react-native";
import Stat from "./Stat";

function TopStats(props) {
  return (
    <View style={styles.topStatsContainer}>
      <Stat text={"SCORE"} value={props.score} />
      <Stat text={"BEST"} value={props.bestScore} />
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
