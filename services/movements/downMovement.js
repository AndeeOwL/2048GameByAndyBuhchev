import { showRandom } from "../showRandom";

export function downMovement(gameValues, score) {
  let isChanged = false;
  let win = false;
  let curScore = score;
  for (let i = 0; i < 4; i++) {
    let mergedNumbers = [0, 0, 0, 0];

    for (let j = 3; j >= 0; j--) {
      if (gameValues[j][i] === 0) continue;
      for (let k = j; k < 3; k++) {
        if (gameValues[k + 1][i] === 0) {
          gameValues[k + 1][i] = gameValues[k][i];
          gameValues[k][i] = 0;
          isChanged=true;
        } else if (
          gameValues[k + 1][i] === gameValues[k][i] &&
          mergedNumbers[k + 1] === 0
        ) {
          gameValues[k + 1][i] = gameValues[k][i] + gameValues[k][i];
          gameValues[k][i] = 0;
          mergedNumbers[k + 1] = 1;
          curScore = score + gameValues[k + 1][i];
          if (gameValues[k + 1][i] === 2048) {
            win = true;
          }
          isChanged = true;
          break;
        }
      }
    }
  }
  if(isChanged){
  showRandom(gameValues);
  }
  return [[...gameValues], win, curScore];
}
