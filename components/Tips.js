import { Text, StyleSheet } from "react-native";

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
    fontSize: 16,
    color: "#917c7c",
  },
});
