export function checkGameOver(gameValues) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (gameValues[i][j] === 0) {
        return false;
      } else if (i != 0 && gameValues[i][j] === gameValues[i - 1][j]) {
        return false;
      } else if (i != 3 && gameValues[i][j] === gameValues[i + 1][j]) {
        return false;
      } else if (i != 0 && gameValues[i][j] === gameValues[i][j - 1]) {
        return false;
      } else if (i != 3 && gameValues[i][j] === gameValues[i][j + 1]) {
        return false;
      }
    }
  }
  return true;
}
