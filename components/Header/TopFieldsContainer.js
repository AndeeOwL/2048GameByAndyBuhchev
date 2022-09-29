import { View, StyleSheet } from "react-native";
import TopStats from "./Stats/TopStats";
import TopButtons from "./Buttons/TopButtons";

function TopFieldsContainer() {
  return (
    <View style={styles.topContainer}>
      <TopStats />
      <TopButtons />
    </View>
  );
}

export default TopFieldsContainer;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    flexDirection: "column",
  },
});
