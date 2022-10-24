import { View, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";
import { Fonts } from "../../constants/Fonts";
import Button from "../Button";
import { useTranslation } from "react-i18next";
import i18n from "../../localization/i18n";

function TopButtons(props) {
  const { t, i18n } = useTranslation();
  return (
    <View style={styles.topButtonsContainer}>
      <Button
        buttonStyle={styles.topButton}
        textStyle={styles.topButtonText}
        onPress={props.onNewPress}
        value={t("new")}
      />
      <Button
        buttonStyle={styles.topButton}
        textStyle={styles.topButtonText}
        onPress={props.onUndoPress}
        value={t("undo")}
      />
    </View>
  );
}

export default TopButtons;

const styles = StyleSheet.create({
  topButtonsContainer: {
    flex: 0.6,
    flexDirection: "row",
  },
  topButton: {
    flex: 1,
    backgroundColor: Colors.mediumOrange,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginLeft: 10,
  },
  topButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: Fonts.small,
  },
});
