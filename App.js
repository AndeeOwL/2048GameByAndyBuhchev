import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import GameScreen from "./screens/GameScreen";
import RetryScreen from "./screens/RetryScreen";
import { NavigationContainer } from "@react-navigation/native";
import store from "./redux/store";
import { Provider } from "react-redux";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
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
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
