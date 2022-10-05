import { View, Text, StyleSheet } from "react-native";
import { styleService } from "./service/styleService";

function NumberField(props) {
  // if moved animate with correct X Y
  // if poped new or merged Become bigger
  let customGridStyle = styleService(props.value)[0];
  let customTextStyle = styleService(props.value)[1];

  return (
    <View style={[styles.gridTextContainer, customGridStyle]}>
      {props.value === 0 ? (
        <Text style={customTextStyle}></Text>
      ) : (
        <Text style={customTextStyle}>{props.value}</Text>
      )}
    </View>
  );
}

export default NumberField;

const styles = StyleSheet.create({
  gridTextContainer: {
    flex: 1,
    margin: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
