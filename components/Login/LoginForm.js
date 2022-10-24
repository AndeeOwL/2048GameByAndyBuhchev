import { View } from "react-native";
import { StyledTextInput } from "../StyledTextInput";
import { useTranslation } from "react-i18next";
import i18n from "../../localization/i18n";

function LoginForm(props) {
  const { t, i18n } = useTranslation();
  return (
    <View>
      <StyledTextInput
        placeholder={t("username")}
        onChangeText={props.usernameChange}
        keyboardType='default'
      />
      <StyledTextInput
        placeholder={t("password")}
        onChangeText={props.passwordChange}
        keyboardType='default'
      />
    </View>
  );
}

export default LoginForm;
