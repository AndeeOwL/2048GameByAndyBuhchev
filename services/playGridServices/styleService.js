import { StylesGlobal } from "../../constants/StylesGlobal";

export function styleService(value) {
  switch (value) {
    case 0:
      return [StylesGlobal.gridTextContainerIfNumberIs0, StylesGlobal.gridText];
    case 2:
      return [StylesGlobal.gridTextContainerIfNumberIs2, StylesGlobal.gridText];
    case 4:
      return [StylesGlobal.gridTextContainerIfNumberIs4, StylesGlobal.gridText];
    case 8:
      return [StylesGlobal.gridTextContainerIfNumberIs8, StylesGlobal.gridText];
    case 16:
      return [
        StylesGlobal.gridTextContainerIfNumberIs16,
        StylesGlobal.gridText,
      ];
    case 32:
      return [
        StylesGlobal.gridTextContainerIfNumberIs32,
        StylesGlobal.gridText,
      ];
    case 64:
      return [
        StylesGlobal.gridTextContainerIfNumberIs64,
        StylesGlobal.gridText,
      ];
    case 128:
      return [
        StylesGlobal.gridTextContainerIfNumberIs128,
        StylesGlobal.gridText,
      ];
    case 256:
      return [
        StylesGlobal.gridTextContainerIfNumberIs256,
        StylesGlobal.gridText,
      ];
    case 512:
      return [
        StylesGlobal.gridTextContainerIfNumberIs512,
        StylesGlobal.gridText,
      ];
    case 1024:
      return [
        StylesGlobal.gridTextContainerIfNumberIs1024,
        StylesGlobal.textContainerIfNumberIs1024,
      ];
    case 2048:
      return [
        StylesGlobal.gridTextContainerIfNumberIs2048,
        StylesGlobal.textContainerIfNumberIs2048,
      ];
  }
}
