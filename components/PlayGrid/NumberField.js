import { View, Text, StyleSheet } from "react-native";

function NumberField() {
  return (
    <View style={styles.gridTextContainer}>
      <Text style={styles.gridText}>0</Text>
    </View>
  );
}

export default NumberField;

const styles = StyleSheet.create({
  gridTextContainer: {
    flex: 1,
    backgroundColor: "#c9bdbd",
    margin: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  gridText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#4d4646",
  },
});
