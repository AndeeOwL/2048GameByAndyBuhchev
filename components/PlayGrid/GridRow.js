import { View, StyleSheet } from "react-native";
import NumberField from "./NumberField";

function GridRow(props) {
  return (
    <View style={styles.gridRowContainer}>
      {props.rowValues.map((value) => (
        <NumberField key={Math.random().toString()} value={value} />
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
