export function showRandom(gameValues) {
  let row = 0;
  let col = 0;

  do {
    row = Math.floor(Math.random() * 4);
    col = Math.floor(Math.random() * 4);
  } while (gameValues[row][col] !== 0);
  {
    const value = Math.random() < 0.5 ? 4 : 2;
    gameValues[row][col] = value;
    return [value, row, col];
  }
}
