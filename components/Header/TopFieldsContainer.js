import { View, StyleSheet } from "react-native";
import TopStats from "./Stats/TopStats";
import TopButtons from "./Buttons/TopButtons";

function TopFieldsContainer(props) {
  return (
    <View style={styles.topContainer}>
      <TopStats bestScore={props.bestScore} />
      <TopButtons
        onNewPress={props.onNewPress}
        onUndoPress={props.onUndoPress}
      />
    </View>
  );
}

export default TopFieldsContainer;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    flexDirection: "column",
  },
});
