import { View, StyleSheet } from "react-native";
import Logo from "./Logo/Logo";
import TopFieldsContainer from "./TopFieldsContainer";

function Header(props) {
  return (
    <View style={styles.headerContainer}>
      <Logo />
      <TopFieldsContainer
        onNewPress={props.onNewPress}
        onUndoPress={props.onUndoPress}
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
});
