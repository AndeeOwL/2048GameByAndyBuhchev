import { StyleSheet, View, Text } from "react-native";

function Stat(props) {
  return (
    <View style={styles.scoreContainer}>
      <Text style={styles.scoreText}>{props.text}</Text>
      <Text style={styles.scoreText}>{props.value}</Text>
    </View>
  );
}

export default Stat;

const styles = StyleSheet.create({
  scoreContainer: {
    flex: 1,
    backgroundColor: "#2e2d2a",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginLeft: 10,
  },
  scoreText: {
    color: "#fcfcfc",
    fontWeight: "bold",
    fontSize: 16,
  },
});
