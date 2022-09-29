import { StyleSheet, Text, Pressable } from "react-native";

function Button(props) {
  return (
    <Pressable style={styles.topButton}>
      <Text style={styles.topButtonText}>{props.value}</Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  topButton: {
    flex: 1,
    backgroundColor: "#f26249",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginLeft: 10,
  },
  topButtonText: {
    color: "#fcfcfc",
    fontWeight: "bold",
    fontSize: 16,
  },
});
