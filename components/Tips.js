import { Text, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";
import { Fonts } from "../constants/Fonts";
import { useTranslation } from "react-i18next";
import i18n from "../localization/i18n";

function Tips() {
  const { t, i18n } = useTranslation();
  return <Text style={styles.tipText}>{t("tips")}</Text>;
}

export default Tips;

const styles = StyleSheet.create({
  tipText: {
    marginBottom: 10,
    marginHorizontal: 10,
    fontWeight: "bold",
    fontSize: Fonts.small,
    color: Colors.mediumBrown,
  },
});
