import AsyncStorage from "@react-native-async-storage/async-storage";
import { render } from "@testing-library/react-native";
import { fireEvent } from "@testing-library/react-native/build";
import LeaderboardScreen from "../screens/LeaderboardScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import GameScreen from "../screens/GameScreen";

const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe("Tests LoginScreen component", () => {
  test("renders correctly", () => {
    const tree = render(<LoginScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("it should render right amount of elements", () => {
    const { getAllByText, getAllByPlaceholderText } = render(<LoginScreen />);
    const logo = getAllByText("2048");
    expect(logo).toHaveLength(1);
    const text = getAllByText("Login to play");
    expect(text).toHaveLength(1);
    const username = getAllByPlaceholderText("username");
    expect(username).toHaveLength(1);
    const password = getAllByPlaceholderText("password");
    expect(password).toHaveLength(1);
    const loginButton = getAllByText("Login");
    expect(loginButton).toHaveLength(1);
    const signUpButton = getAllByText("SignUp");
    expect(signUpButton).toHaveLength(1);
    const leaderboardButton = getAllByText("Leaderboard");
    expect(leaderboardButton).toHaveLength(1);
  });

  test("it should change username and password", () => {
    const { getByPlaceholderText } = render(<LoginScreen />);
    const username = getByPlaceholderText("username");
    const password = getByPlaceholderText("password");
    fireEvent.changeText(username, "Andrean");
    fireEvent.changeText(password, "12345678");
  });

  test("Pressed login with invalid inputs should not navigate", () => {
    const { getByText } = render(<LoginScreen />);
    const login = getByText("Login");
    fireEvent.press(login);
    expect(mockedNavigate).toHaveBeenCalledTimes(0);
  });

  test("Pressed login with valid inputs should navigate", () => {
    mockAsyncStorage.setItem(
      "Andrean",
      JSON.stringify({
        username: "Andrean",
        password: "12345678",
        score: 0,
      })
    );
    const { getByText, getByPlaceholderText } = render(<LoginScreen />);
    const login = getByText("Login");
    const username = getByPlaceholderText("username");
    const password = getByPlaceholderText("password");
    fireEvent.changeText(username, "Andrean");
    fireEvent.changeText(password, "12345678");
    fireEvent.press(login);
    expect(mockedNavigate).toHaveBeenCalledTimes(0);
  });

  test("Pressed signUp should navigate", () => {
    const { getByText } = render(<LoginScreen />);
    const signUp = getByText("SignUp");
    fireEvent.press(signUp);
    expect(mockedNavigate).toHaveBeenCalledWith(SignUpScreen);
  });

  test("Pressed login with invalid inputs should not navigate", () => {
    const { getByText } = render(<LoginScreen />);
    const leaderboard = getByText("Leaderboard");
    fireEvent.press(leaderboard);
    expect(mockedNavigate).toHaveBeenCalledWith(LeaderboardScreen);
  });
});
