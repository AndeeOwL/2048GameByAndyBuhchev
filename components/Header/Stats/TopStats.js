import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import Stat from "./Stat";
import { useTranslation } from "react-i18next";
import i18n from "../../../localization/i18n";

function TopStats(props) {
  const { t, i18n } = useTranslation();
  const { score } = useSelector((state) => state.score);

  return (
    <View style={styles.topStatsContainer}>
      <Stat text={t("score")} value={score} />
      <Stat text={t("best")} value={props.bestScore} />
    </View>
  );
}

export default TopStats;

const styles = StyleSheet.create({
  topStatsContainer: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10,
  },
});
