import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import Stat from "./Stat";

function TopStats(props) {
  const { score } = useSelector((state) => state.score);

  return (
    <View style={styles.topStatsContainer}>
      <Stat text={"SCORE"} value={score} />
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
