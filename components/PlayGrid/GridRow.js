import { View, Text, StyleSheet } from "react-native";
import NumberField from "./NumberField";

function GridRow() {
  return (
    <View style={styles.gridRowContainer}>
      {Array.from(
        [0, 1, 2, 3].map(() => <NumberField key={Math.random().toString()} />)
      )}
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
