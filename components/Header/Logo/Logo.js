import { StyleSheet, View, Text } from "react-native";
import { Colors } from "../../common/Colors";
import { Fonts } from "../../common/Fonts";

function Logo() {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logoText}>2048</Text>
    </View>
  );
}

export default Logo;

const styles = StyleSheet.create({
  logoContainer: {
    flex: 0.5,
    backgroundColor: Colors.mediumYellow,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  logoText: {
    color: "white",
    fontWeight: "bold",
    fontSize: Fonts.big,
  },
});
