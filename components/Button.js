import { Text, Pressable } from "react-native";

function Button(props) {
  return (
    <Pressable style={props.buttonStyle}>
      <Text style={props.textStyle} onPress={props.onPress}>
        {props.value}
      </Text>
    </Pressable>
  );
}

export default Button;
