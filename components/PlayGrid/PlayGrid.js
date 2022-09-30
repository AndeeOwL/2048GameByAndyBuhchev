import { StyleSheet, Pressable } from "react-native";
import GridRow from "./GridRow";

function PlayGrid(props) {
  return (
    <Pressable style={styles.gridContainer}>
      {props.gameValues.map((rowArr) => (
        <GridRow key={Math.random().toString()} rowValues={rowArr} />
      ))}
    </Pressable>
  );
}

export default PlayGrid;

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1.5,
    borderRadius: 5,
    backgroundColor: "#917c7c",
    padding: 5,
  },
});
