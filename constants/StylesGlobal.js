import { StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { Fonts } from "./Fonts";

const StylesGlobal = StyleSheet.create({
  gridTextContainerIfNumberIs0: {},
  gridTextContainerIfNumberIs2: {
    backgroundColor: Colors.color2,
  },
  gridTextContainerIfNumberIs4: {
    backgroundColor: Colors.color4,
  },
  gridTextContainerIfNumberIs8: {
    backgroundColor: Colors.color8,
  },
  gridTextContainerIfNumberIs16: {
    backgroundColor: Colors.color16,
  },
  gridTextContainerIfNumberIs32: {
    backgroundColor: Colors.color32,
  },
  gridTextContainerIfNumberIs64: {
    backgroundColor: Colors.color64,
  },
  gridTextContainerIfNumberIs128: {
    backgroundColor: Colors.color128,
  },
  gridTextContainerIfNumberIs256: {
    backgroundColor: Colors.color256,
  },
  gridTextContainerIfNumberIs512: {
    backgroundColor: Colors.color512,
  },
  gridTextContainerIfNumberIs1024: {
    backgroundColor: Colors.color1024,
  },
  textContainerIfNumberIs1024: {
    fontSize: Fonts.medium,
    fontWeight: "bold",
    color: Colors.darkBrown,
  },
  gridTextContainerIfNumberIs2048: {
    backgroundColor: Colors.color2048,
  },
  textContainerIfNumberIs2048: {
    fontSize: Fonts.medium,
    fontWeight: "bold",
    color: Colors.darkBrown,
  },
  gridText: {
    fontSize: Fonts.extraBig,
    fontWeight: "bold",
    color: Colors.darkBrown,
  },
});

export { StylesGlobal };
