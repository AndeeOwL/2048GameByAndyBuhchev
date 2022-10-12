import { showRandom } from "../showRandom";

export function leftMovement(values, score) {
  let gameValues = [
    [...values[0]],
    [...values[1]],
    [...values[2]],
    [...values[3]],
  ];
  let isChanged = false;
  let win = false;
  let curScore = score;
  let steps = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  let isMerged = [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
  ];
  let isNew = [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
  ];

  for (let i = 0; i < 4; i++) {
    let mergedNumbers = [0, 0, 0, 0];
    let col = i;
    let stepsCount = 0;
    for (let j = 1; j < 4; j++) {
      let row = j;
      if (gameValues[i][j] === 0) continue;
      for (let k = j; k > 0; k--) {
        if (gameValues[i][k - 1] === 0) {
          gameValues[i][k - 1] = gameValues[i][k];
          gameValues[i][k] = 0;
          stepsCount++;
          isChanged = true;
        } else if (
          gameValues[i][k - 1] === gameValues[i][k] &&
          mergedNumbers[k - 1] === 0
        ) {
          gameValues[i][k - 1] = gameValues[i][k - 1] + gameValues[i][k];
          gameValues[i][k] = 0;
          mergedNumbers[k - 1] = 1;
          curScore = score + gameValues[i][k - 1];
          stepsCount++;
          let rowMerged = 0;
          if (row + stepsCount > 3) {
            rowMerged = 3;
          } else {
            rowMerged = row + stepsCount;
          }
          isMerged[rowMerged][col] = true;
          if (gameValues[i][k - 1] === 2048) {
            win = true;
          }
          isChanged = true;
          break;
        }
      }
      steps[row][col] = stepsCount;
    }
  }
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 3; j++) {
      let a = steps[i][j];
      let b = steps[i + 1][j];
      if (a !== 0 && b !== 0) {
        steps[i][j] = steps[i][j] - 1;
      } else if (isMerged[i][j] === true) {
        steps[i][j] = steps[i][j] - 1;
      }
    }
  }
  if (isChanged) {
    let random = showRandom(gameValues);
    let randomValue = random[0];
    let randomRow = random[1];
    let randomCol = random[2];
    gameValues[randomRow][randomCol] = randomValue;
    isNew[randomRow][randomCol] = true;
  }

  return [[...gameValues], win, curScore, isNew, isMerged, steps];
}
