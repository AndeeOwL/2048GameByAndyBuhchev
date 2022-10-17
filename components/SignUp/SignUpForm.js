import { StyleSheet, TextInput, View } from "react-native";
import { Colors } from "../common/Colors";
import { Fonts } from "../common/Fonts";

function SignUpForm(props) {
  return (
    <View>
      <TextInput
        placeholder='username'
        style={styles.inputField}
        onChangeText={props.usernameChange}
        keyboardType='default'
      />
      <TextInput
        placeholder='password'
        style={styles.inputField}
        onChangeText={props.passwordChange}
        keyboardType='default'
      />
      <TextInput
        placeholder='confirm password'
        style={styles.inputField}
        onChangeText={props.confirmPasswordChange}
        keyboardType='default'
      />
    </View>
  );
}

export default SignUpForm;

const styles = StyleSheet.create({
  inputField: {
    padding: 10,
    margin: 15,
    height: 50,
    width: 300,
    backgroundColor: Colors.color4,
    fontSize: Fonts.medium,
  },
});
