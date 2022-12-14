import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import GameScreen from "./screens/GameScreen";
import RetryScreen from "./screens/RetryScreen";
import { NavigationContainer } from "@react-navigation/native";
import store from "./redux/store";
import { Provider } from "react-redux";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import LeaderboardScreen from "./screens/LeaderboardScreen";
import { LogBox } from "react-native";
import i18n from "./localization/i18n";
import { Colors } from "./constants/Colors";

const Stack = createStackNavigator();

export default function App() {
  LogBox.ignoreLogs(["Require cycle:"]);
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);

  return (
    <>
      <StatusBar style='auto' />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='LoginScreen'
              component={LoginScreen}
              options={{
                headerShown: false,
                animationEnabled: false,
              }}
            />
            <Stack.Screen
              name='GameScreen'
              component={GameScreen}
              options={{
                headerShown: false,
                animationEnabled: false,
              }}
            />
            <Stack.Screen
              name='RetryScreen'
              component={RetryScreen}
              options={{
                headerShown: false,
                animationEnabled: false,
              }}
            />
            <Stack.Screen
              name='SignUpScreen'
              component={SignUpScreen}
              options={{
                headerShown: true,
                headerTitle: "",
                animationEnabled: false,
                headerStyle: {
                  backgroundColor: Colors.color1024,
                },
                headerTintColor: "black",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
                headerBackTitleVisible: false,
              }}
            />
            <Stack.Screen
              name='LeaderboardScreen'
              component={LeaderboardScreen}
              options={{
                headerShown: true,
                headerTitle: "",
                animationEnabled: false,
                headerStyle: {
                  backgroundColor: Colors.color1024,
                },
                headerTintColor: "black",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
                headerBackTitleVisible: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
