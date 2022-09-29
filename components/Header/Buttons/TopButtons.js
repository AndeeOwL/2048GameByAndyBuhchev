import { View, StyleSheet } from "react-native";
import Button from "./Button";

function topButtons() {
  return (
    <View style={styles.topButtonsContainer}>
      <Button value={"NEW"} />
      <Button value={"UNDO"} />
    </View>
  );
}

export default topButtons;

const styles = StyleSheet.create({
  topButtonsContainer: {
    flex: 0.6,
    flexDirection: "row",
  },
});
