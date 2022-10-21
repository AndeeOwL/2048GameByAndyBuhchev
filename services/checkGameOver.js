export function checkGameOver(gameValues) {
  for (let row = 0; row <= 3; row++) {
    for (let col = 0; col <= 3; col++) {
      console.log(row + " " + col);
      if (gameValues[row][col] === 0) {
        console.log("entered 0 check");
        return;
      } else if (
        row !== 0 &&
        gameValues[row][col] === gameValues[row - 1][col]
      ) {
        console.log("entered row-1 check");
        return;
      } else if (
        row !== 3 &&
        gameValues[row][col] === gameValues[row + 1][col]
      ) {
        console.log("entered row+1 check");
        return;
      } else if (
        col !== 0 &&
        gameValues[row][col] === gameValues[row][col - 1]
      ) {
        console.log("entered col-1 check");
        return;
      } else if (
        col !== 3 &&
        gameValues[row][col] === gameValues[row][col + 1]
      ) {
        console.log("entered col+1 check");
        return;
      }
    }
  }
  return true;
}
