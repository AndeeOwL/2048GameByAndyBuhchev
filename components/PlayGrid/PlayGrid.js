import { StyleSheet, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { Colors } from "../common/Colors";
import GridRow from "./GridRow";

function PlayGrid() {
  const { gameValues } = useSelector((state) => state.gameValues);
  const { steps } = useSelector((state) => state.steps);
  const { direction } = useSelector((state) => state.direction);
  const { isMerged } = useSelector((state) => state.isMerged);
  const { isNew } = useSelector((state) => state.isNew);

  return (
    <Pressable style={styles.gridContainer}>
      {gameValues.map((rowArr, index) => (
        <GridRow
          key={Math.random().toString()}
          rowValues={rowArr}
          steps={steps[index]}
          direction={direction}
          isMerged={isMerged[index]}
          isNew={isNew[index]}
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
    backgroundColor: Colors.lightBrown,
    overflow: "hidden",
  },
});
