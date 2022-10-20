import { View, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";
import { Fonts } from "../../constants/Fonts";
import Logo from "../Logo";
import TopFieldsContainer from "./TopFieldsContainer";

function Header(props) {
  return (
    <View style={styles.headerContainer}>
      <Logo logoContainer={styles.logoContainer} logoText={styles.logoText} />
      <TopFieldsContainer
        onNewPress={props.onNewPress}
        onUndoPress={props.onUndoPress}
        bestScore={props.bestScore}
      />
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 0.5,
    marginTop: 75,
    flexDirection: "row",
    marginBottom: 10,
  },
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
