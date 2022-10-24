import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";
import { Colors } from "../constants/Colors";
import { Fonts } from "../constants/Fonts";
import { useTranslation } from "react-i18next";
import i18n from "../localization/i18n";

function BottomStats() {
  const { t, i18n } = useTranslation();
  const { moves } = useSelector((state) => state.moves);
  const { timer } = useSelector((state) => state.timer);
  return (
    <View style={styles.statsContainer}>
      <Text style={styles.statsText}>
        {moves} {t("moves")}
      </Text>
      <Text style={styles.statsText}>
        {timer} {t("seconds")}
      </Text>
    </View>
  );
}

export default BottomStats;

const styles = StyleSheet.create({
  statsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  statsText: {
    fontWeight: "bold",
    fontSize: Fonts.small,
    color: Colors.mediumBrown,
  },
});
