import { View, StyleSheet } from "react-native";
import Button from "./Button";

function topButtons(props) {
  return (
    <View style={styles.topButtonsContainer}>
      <Button onPress={props.onNewPress} value={"NEW"} />
      <Button onPress={props.onUndoPress} value={"UNDO"} />
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
