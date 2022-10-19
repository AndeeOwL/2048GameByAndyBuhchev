export function checkGameOver(gameValues) {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (gameValues[row][col] === 0) {
        return false;
      } else if (
        row !== 0 &&
        gameValues[row][col] === gameValues[row - 1][col]
      ) {
        return false;
      } else if (
        row !== 3 &&
        gameValues[row][col] === gameValues[row + 1][col]
      ) {
        return false;
      } else if (
        col !== 0 &&
        gameValues[row][col] === gameValues[row][col - 1]
      ) {
        return false;
      } else if (
        col !== 3 &&
        gameValues[row][col] === gameValues[row][col + 1]
      ) {
        return false;
      }
    }
  }
  return true;
}
