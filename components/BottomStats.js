import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";
import { Colors } from "./common/Colors";
import { Fonts } from "./common/Fonts";

function BottomStats() {
  const { moves } = useSelector((state) => state.moves);
  const { timer } = useSelector((state) => state.timer);
  return (
    <View style={styles.statsContainer}>
      <Text style={styles.statsText}>{moves} moves</Text>
      <Text style={styles.statsText}>{timer} seconds</Text>
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
    fontSize: Fonts.small,
    color: Colors.mediumBrown,
  },
});
