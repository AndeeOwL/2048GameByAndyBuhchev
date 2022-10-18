import { StyleSheet, Text, View } from "react-native";
import { Colors } from "./common/Colors";
import { Fonts } from "./common/Fonts";

function MainLogo(props) {
  return (
    <View style={styles.logo}>
      <Text style={styles.logoText}>2048</Text>
    </View>
  );
}

export default MainLogo;

const styles = StyleSheet.create({
  logo: {
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: Colors.color1024,
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontSize: Fonts.extraBig,
    fontWeight: "bold",
  },
});
