import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../common/Colors";
import { Fonts } from "../common/Fonts";

function LoginButtons(props) {
  return (
    <>
      <View style={styles.buttonsContainer}>
        <Text style={styles.buttons} onPress={props.login}>
          Login
        </Text>
        <Text style={styles.buttons} onPress={props.signUp}>
          Sign Up
        </Text>
      </View>
      <View>
        <Text style={styles.buttons} onPress={props.leaderboard}>
          LeaderBoard
        </Text>
      </View>
    </>
  );
}

export default LoginButtons;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
  },
  buttons: {
    margin: 15,
    padding: 15,
    backgroundColor: Colors.color8,
    fontSize: Fonts.small,
    fontWeight: "bold",
  },
});
