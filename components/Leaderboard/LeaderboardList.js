import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { Fonts } from "../../constants/Fonts";
import { useTranslation } from "react-i18next";
import i18n from "../../localization/i18n";

function LeaderboardList(props) {
  const { t, i18n } = useTranslation();
  return (
    <ScrollView style={styles.scrollContainer}>
      {props.users.map((user) => (
        <View key={user.username} style={styles.userStatsContainer}>
          <Text style={styles.userStats}>
            {t("user")}:{user.username}
          </Text>
          <Text style={styles.userStats}>
            {t("score")}:{user.score}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

export default LeaderboardList;

const styles = StyleSheet.create({
  userStats: {
    fontSize: Fonts.medium,
    color: Colors.darkBrown,
  },
  userStatsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.color16,
    flexDirection: "row",
    padding: 5,
    margin: 5,
    width: 350,
  },
  scrollContainer: {
    marginHorizontal: 15,
    marginBottom: 50,
  },
});
