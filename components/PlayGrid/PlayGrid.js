import { StyleSheet, Pressable } from "react-native";
import GridRow from "./GridRow";

function PlayGrid(props) {
  return (
    <Pressable style={styles.gridContainer}>
      {props.gameValues.map((rowArr, index) => (
        <GridRow
          key={Math.random().toString()}
          rowValues={rowArr}
          steps={props.steps[index]}
          direction={props.direction}
          isMerged={props.isMerged[index]}
          isNew={props.isNew[index]}
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
    backgroundColor: "#c9bdbd",
    overflow: "hidden",
  },
});
