export function bestScoreChecker(score, bestScore, win, lose) {
  if ((win || lose) && score > bestScore) {
    return true;
  } else {
    return false;
  }
}
