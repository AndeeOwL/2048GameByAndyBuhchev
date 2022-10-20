import { StyleSheet, TextInput, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { Fonts } from "../../constants/Fonts";

function LoginForm(props) {
  return (
    <View>
      <TextInput
        style={styles.inputField}
        placeholder='username'
        onChangeText={props.usernameChange}
        keyboardType='default'
      />
      <TextInput
        style={styles.inputField}
        placeholder='password'
        onChangeText={props.passwordChange}
        keyboardType='default'
      />
    </View>
  );
}

export default LoginForm;

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
