import { StyleSheet, TextInput, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { Fonts } from "../../constants/Fonts";
import { useTranslation } from "react-i18next";
import i18n from "../../localization/i18n";

function SignUpForm(props) {
  const { t, i18n } = useTranslation();
  return (
    <View>
      <TextInput
        placeholder={t("username")}
        style={styles.inputField}
        onChangeText={props.usernameChange}
        keyboardType='default'
      />
      <TextInput
        placeholder={t("password")}
        style={styles.inputField}
        onChangeText={props.passwordChange}
        keyboardType='default'
      />
      <TextInput
        placeholder={t("confirmPassword")}
        style={styles.inputField}
        onChangeText={props.confirmPasswordChange}
        keyboardType='default'
      />
    </View>
  );
}

export default SignUpForm;

const styles = StyleSheet.create({
  inputField: {
    padding: 10,
    margin: 15,
    height: 50,
    width: 300,
    backgroundColor: Colors.color4,
    fontSize: Fonts.medium,
  },
});
