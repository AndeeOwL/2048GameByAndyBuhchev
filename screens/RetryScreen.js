import { StyleSheet, Text, View } from "react-native";

function RetryScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text>YOU LOSE</Text>
    </View>
  );
}

export default RetryScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
