import AsyncStorage from "@react-native-async-storage/async-storage";
import { render } from "@testing-library/react-native";
import { fireEvent } from "@testing-library/react-native/build";
import LeaderboardScreen from "../screens/LeaderboardScreen";
import LoginScreen from "../screens/LoginScreen";

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

describe("Tests SignUpScreen component", () => {
  test("renders correctly", () => {
    const tree = render(<LeaderboardScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("it should render right amount of elements", () => {
    const { getAllByText } = render(<LeaderboardScreen />);
    const logo = getAllByText("2048");
    expect(logo).toHaveLength(1);
    const text = getAllByText("Leaderboard");
    expect(text).toHaveLength(1);
    const login = getAllByText("Login");
    expect(login).toHaveLength(1);
    const loadLeaderboard = getAllByText("Load Leaderboard");
    expect(loadLeaderboard).toHaveLength(1);
  });

  test("load should be pressable", () => {
    const { getByText } = render(<LeaderboardScreen />);
    const load = getByText("Load Leaderboard");
    fireEvent.press(load);
  });

  test("Pressed login should navigate", () => {
    const { getByText } = render(<LeaderboardScreen />);
    const login = getByText("Login");
    fireEvent.press(login);
    expect(mockedNavigate).toHaveBeenCalledWith(LoginScreen);
  });

  test("Should get all users that are stored", () => {
    keys = AsyncStorage.getAllKeys();
    expect(keys === null).toEqual(false);
  });
});
