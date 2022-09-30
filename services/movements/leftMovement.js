import { showRandom } from "../showRandom";

export function leftMovement(gameValues, score) {
  let win = false;
  let curScore = score;
  for (let i = 0; i < 4; i++) {
    let mergedNumbers = [0, 0, 0, 0];

    for (let j = 1; j < 4; j++) {
      if (gameValues[i][j] === 0) continue;
      for (let k = j; k > 0; k--) {
        if (gameValues[i][k - 1] === 0) {
          gameValues[i][k - 1] = gameValues[i][k];
          gameValues[i][k] = 0;
        } else if (
          gameValues[i][k - 1] === gameValues[i][k] &&
          mergedNumbers[k - 1] === 0
        ) {
          gameValues[i][k - 1] = gameValues[i][k - 1] + gameValues[i][k];
          gameValues[i][k] = 0;
          mergedNumbers[k - 1] = 1;
          curScore = score + gameValues[i][k - 1];
          if (gameValues[i][k - 1] === 2048) {
            win = true;
          }
          break;
        }
      }
    }
  }
  showRandom(gameValues);
  return [[...gameValues], win, curScore];
}
