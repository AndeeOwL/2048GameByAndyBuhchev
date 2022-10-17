import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../common/Colors";
import { Fonts } from "../common/Fonts";

function RegisterButton(props) {
  return (
    <View style={styles.buttonsContainer}>
      <Text style={styles.registerbutton} onPress={props.register}>
        Register
      </Text>
      <Text style={styles.registerbutton} onPress={props.login}>
        Login
      </Text>
    </View>
  );
}

export default RegisterButton;

const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 15,
    flexDirection: "row",
  },
  registerbutton: {
    marginHorizontal: 15,
    padding: 15,
    backgroundColor: Colors.color8,
    fontSize: Fonts.medium,
    fontWeight: "bold",
  },
});
