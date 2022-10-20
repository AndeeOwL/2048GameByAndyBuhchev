import { StyleSheet, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { Colors } from "../../constants/Colors";
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
          key={index}
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
    flex: 1,
    borderRadius: 5,
    backgroundColor: Colors.lightBrown,
    overflow: "hidden",
  },
});
