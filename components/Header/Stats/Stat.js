import { StyleSheet, View, Text } from "react-native";
import { Colors } from "../../../constants/Colors";
import { Fonts } from "../../../constants/Fonts";

function Stat(props) {
  return (
    <View style={styles.scoreContainer}>
      <Text style={styles.scoreText}>{props.text}</Text>
      <Text style={styles.scoreText}>{props.value}</Text>
    </View>
  );
}

export default Stat;

const styles = StyleSheet.create({
  scoreContainer: {
    flex: 1,
    backgroundColor: Colors.mediumBlack,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginLeft: 10,
  },
  scoreText: {
    color: "white",
    fontWeight: "bold",
    fontSize: Fonts.small,
  },
});
