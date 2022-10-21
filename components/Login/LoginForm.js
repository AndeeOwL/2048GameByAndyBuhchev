import { View } from "react-native";
import { StyledTextInput } from "../StyledTextInput";

function LoginForm(props) {
  return (
    <View>
      <StyledTextInput
        placeholder='username'
        onChangeText={props.usernameChange}
        keyboardType='default'
      />
      <StyledTextInput
        placeholder='password'
        onChangeText={props.passwordChange}
        keyboardType='default'
      />
    </View>
  );
}

export default LoginForm;
