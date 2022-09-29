import { StyleSheet, Pressable } from "react-native";
import GridRow from "./GridRow";

function PlayGrid(props) {
  for (let i = 0; i >= 3; i++) {
    console.log(props.gameValues[i]);
  }
  return (
    <Pressable style={styles.gridContainer}>
      {props.gameValues.map((i) => (
        <GridRow
          key={Math.random().toString()}
          rowValues={props.gameValues[i]}
        />
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
