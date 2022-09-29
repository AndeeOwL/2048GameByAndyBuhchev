import { StyleSheet, View, Text } from "react-native";

function Logo() {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logoText}>2048</Text>
    </View>
  );
}

export default Logo;

const styles = StyleSheet.create({
  logoContainer: {
    flex: 0.5,
    backgroundColor: "#f7ce52",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  logoText: {
    color: "#fcfcfc",
    fontWeight: "bold",
    fontSize: 32,
  },
});
