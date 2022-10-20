import { View, Text } from "react-native";

function Logo(props) {
  return (
    <View style={props.logoContainer}>
      <Text style={props.logoText}>2048</Text>
    </View>
  );
}

export default Logo;
