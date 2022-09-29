import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import GameScreen from "./screens/GameScreen";
import RetryScreen from "./screens/RetryScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='GameScreen'
            component={GameScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='RetryScreen'
            component={RetryScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
