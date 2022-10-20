import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { Fonts } from "../../constants/Fonts";
import Button from "../Button";

function LoginButtons(props) {
  return (
    <>
      <View style={styles.buttonsContainer}>
        <Button
          textStyle={styles.buttons}
          onPress={props.login}
          value={"Login"}
        />
        <Button
          textStyle={styles.buttons}
          onPress={props.signUp}
          value={"SignUp"}
        />
      </View>
      <View>
        <Button
          textStyle={styles.buttons}
          onPress={props.leaderboard}
          value={"Leaderboard"}
        />
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
