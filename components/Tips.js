import { Text, StyleSheet } from "react-native";
import { Colors } from "./common/Colors";
import { Fonts } from "./common/Fonts";

function Tips() {
  return (
    <Text style={styles.tipText}>
      Join the numbers and get to the 2048 tile!
    </Text>
  );
}

export default Tips;

const styles = StyleSheet.create({
  tipText: {
    marginBottom: 10,
    marginHorizontal: 10,
    fontWeight: "bold",
    fontSize: Fonts.small,
    color: Colors.mediumBrown,
  },
});
