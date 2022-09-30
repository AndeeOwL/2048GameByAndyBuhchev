import { View, Text, StyleSheet } from "react-native";
import { stylingService } from "/services/stylingService";

function NumberField(props) {
  return (
    <View
      style={
        props.value === 0
          ? styles.gridTextContainer
          : stylingService(props.value)
      }
    >
      {props.value !== 0 && <Text style={styles.gridText}>{props.value}</Text>}
    </View>
  );
}

export default NumberField;

const styles = StyleSheet.create({
  gridTextContainer: {
    flex: 1,
    backgroundColor: "#c9bdbd",
    margin: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  gridText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#4d4646",
  },
  gridTextContainerIfNumberIs2: {
    flex: 1,
    backgroundColor: "#ebe8da",
    margin: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
