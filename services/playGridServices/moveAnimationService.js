export function moveAnimationService(direction, steps) {
  if (steps === undefined) {
    return 0;
  }
  if (steps > 3) {
    steps = 3;
  }
  switch (direction) {
    case "LEFT":
      return 89 * -steps;
    case "RIGHT":
      return 89 * steps;
    case "UP":
      return 89 * -steps;
    case "DOWN":
      return 89 * steps;
  }
}
