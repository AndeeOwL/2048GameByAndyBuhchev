import { stylesGlobal } from "../constants/stylesGlobal";

export function stylingService(value) {
  if (value === 2) {
    return stylesGlobal.gridTextContainerIfNumberIs2;
  } else if (value === 4) {
    return stylesGlobal.gridTextContainerIfNumberIs4;
  } else if (value === 8) {
    return stylesGlobal.gridTextContainerIfNumberIs8;
  } else if (value === 16) {
    return stylesGlobal.gridTextContainerIfNumberIs16;
  } else if (value === 32) {
    return stylesGlobal.gridTextContainerIfNumberIs32;
  } else if (value === 64) {
    return stylesGlobal.gridTextContainerIfNumberIs64;
  } else if (value === 128) {
    return stylesGlobal.gridTextContainerIfNumberIs128;
  } else if (value === 256) {
    return stylesGlobal.gridTextContainerIfNumberIs256;
  } else if (value === 512) {
    return stylesGlobal.gridTextContainerIfNumberIs512;
  } else if (value === 1024) {
    return stylesGlobal.gridTextContainerIfNumberIs1024;
  } else if (value === 2048) {
    return stylesGlobal.gridTextContainerIfNumberIs2048;
  }
}
