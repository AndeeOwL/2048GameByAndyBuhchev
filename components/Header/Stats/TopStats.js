import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import Stat from "./Stat";

function TopStats() {
  const { score } = useSelector((state) => state.score);
  const { bestScore } = useSelector((state) => state.bestScore);

  return (
    <View style={styles.topStatsContainer}>
      <Stat text={"SCORE"} value={score} />
      <Stat text={"BEST"} value={bestScore} />
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
