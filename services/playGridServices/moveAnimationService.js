export function moveAnimationService(direction, steps, pixelsToMove) {
  if (steps === undefined) {
    return 0;
  }
  if (steps > 3) {
    steps = 3;
  }
  switch (direction) {
    case "LEFT":
      return pixelsToMove * -steps;
    case "RIGHT":
      return pixelsToMove * steps;
    case "UP":
      return pixelsToMove * -steps;
    case "DOWN":
      return pixelsToMove * steps;
  }
}
