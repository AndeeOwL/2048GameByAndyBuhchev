import { View, StyleSheet } from "react-native";
import NumberField from "./NumberField";

function GridRow(props) {
  return (
    <View style={styles.gridRowContainer}>
      {props.rowValues.map((value, index) => (
        <NumberField
          key={Math.random().toString()}
          value={value}
          steps={props.steps[index]}
          direction={props.direction}
          isMerged={props.isMerged[index]}
          isNew={props.isNew[index]}
        />
      ))}
    </View>
  );
}

export default GridRow;

const styles = StyleSheet.create({
  gridRowContainer: {
    flex: 1,
    flexDirection: "row",
  },
});
