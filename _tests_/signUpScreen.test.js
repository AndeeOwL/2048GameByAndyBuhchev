import { render } from "@testing-library/react-native";
import { fireEvent } from "@testing-library/react-native/build";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";

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
    const tree = render(<SignUpScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("it should render right amount of elements", () => {
    const { getAllByText, getAllByPlaceholderText } = render(<SignUpScreen />);
    const logo = getAllByText("2048");
    expect(logo).toHaveLength(1);
    const text = getAllByText("Register");
    expect(text).toHaveLength(2);
    const username = getAllByPlaceholderText("username");
    expect(username).toHaveLength(1);
    const password = getAllByPlaceholderText("password");
    expect(password).toHaveLength(1);
    const confirm = getAllByPlaceholderText("confirm password");
    expect(confirm).toHaveLength(1);
  });

  test("it should change username and password and confirm password", () => {
    const { getByPlaceholderText } = render(<SignUpScreen />);
    const username = getByPlaceholderText("username");
    const password = getByPlaceholderText("password");
    const confirm = getByPlaceholderText("confirm password");
    fireEvent.changeText(username, "andrean");
    fireEvent.changeText(password, "12345678");
    fireEvent.changeText(confirm, "12345678");
  });

  test("Pressed register with invalid inputs should not navigate", () => {
    const { getByPlaceholderText, getAllByText } = render(<SignUpScreen />);
    const username = getByPlaceholderText("username");
    const password = getByPlaceholderText("password");
    const confirm = getByPlaceholderText("confirm password");
    fireEvent.changeText(username, "andrean");
    fireEvent.changeText(password, "12345678");
    fireEvent.changeText(confirm, "12345678");
    const register = getAllByText("Register");
    fireEvent.press(register[1]);
    expect(mockedNavigate).toHaveBeenCalledTimes(0);
  });

  test("Pressed register with valid inputs should navigate", () => {
    const { getAllByText, getByPlaceholderText } = render(<SignUpScreen />);
    const register = getAllByText("Register");
    const username = getByPlaceholderText("username");
    const password = getByPlaceholderText("password");
    const confirm = getByPlaceholderText("confirm password");
    fireEvent.changeText(username, "andrean");
    fireEvent.changeText(password, "12345678");
    fireEvent.changeText(confirm, "12345678");
    fireEvent.press(register[1]);
    expect(mockedNavigate).toHaveBeenCalledWith(LoginScreen);
  });
});
