import { stylesGlobal } from "../constants/stylesGlobal";

export function styleService(value) {
  switch (value) {
    case 0:
      return [stylesGlobal.gridTextContainerIfNumberIs0, stylesGlobal.gridText];
    case 2:
      return [stylesGlobal.gridTextContainerIfNumberIs2, stylesGlobal.gridText];
    case 4:
      return [stylesGlobal.gridTextContainerIfNumberIs4, stylesGlobal.gridText];
    case 8:
      return [stylesGlobal.gridTextContainerIfNumberIs8, stylesGlobal.gridText];
    case 16:
      return [
        stylesGlobal.gridTextContainerIfNumberIs16,
        stylesGlobal.gridText,
      ];
    case 32:
      return [
        stylesGlobal.gridTextContainerIfNumberIs32,
        stylesGlobal.gridText,
      ];
    case 64:
      return [
        stylesGlobal.gridTextContainerIfNumberIs64,
        stylesGlobal.gridText,
      ];
    case 128:
      return [
        stylesGlobal.gridTextContainerIfNumberIs128,
        stylesGlobal.gridText,
      ];
    case 256:
      return [
        stylesGlobal.gridTextContainerIfNumberIs256,
        stylesGlobal.gridText,
      ];
    case 512:
      return [
        stylesGlobal.gridTextContainerIfNumberIs512,
        stylesGlobal.gridText,
      ];
    case 1024:
      return [
        stylesGlobal.gridTextContainerIfNumberIs1024,
        stylesGlobal.textContainerIfNumberIs1024,
      ];
    case 2048:
      return [
        stylesGlobal.gridTextContainerIfNumberIs2048,
        stylesGlobal.textContainerIfNumberIs2048,
      ];
  }
}
