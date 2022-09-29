import { View, StyleSheet } from "react-native";
import Logo from "./Logo/Logo";
import TopFieldsContainer from "./TopFieldsContainer";

function Header() {
  return (
    <View style={styles.headerContainer}>
      <Logo />
      <TopFieldsContainer />
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
