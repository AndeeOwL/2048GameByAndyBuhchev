import { StyleSheet, Text, Pressable } from "react-native";
import { Colors } from "../../common/Colors";
import { Fonts } from "../../common/Fonts";

function Button(props) {
  return (
    <Pressable style={styles.topButton}>
      <Text onPress={props.onPress} style={styles.topButtonText}>
        {props.value}
      </Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  topButton: {
    flex: 1,
    backgroundColor: Colors.mediumOrange,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginLeft: 10,
  },
  topButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: Fonts.small,
  },
});
