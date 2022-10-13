import { moveAnimationService } from "../components/PlayGrid/service/moveAnimationService";

describe("Return the right steps", () => {
  test("should return 0 if steps undefined", () => {
    expect(moveAnimationService("UP", undefined)).toEqual(0);
  });
  test("should return 3 when steps are more than 3", () => {
    expect(moveAnimationService("UP", 5)).toEqual(-267);
  });
  test("should return the right values when direction is UP and steps are valid", () => {
    expect(moveAnimationService("UP", 1)).toEqual(-89);
  });
  test("should return the right values when direction is DOWN and steps are valid", () => {
    expect(moveAnimationService("DOWN", 1)).toEqual(89);
  });
  test("should return the right values when direction is LEFT and steps are valid", () => {
    expect(moveAnimationService("UP", 1)).toEqual(-89);
  });
  test("should return the right values when direction is RIGHT and steps are valid", () => {
    expect(moveAnimationService("RIGHT", 1)).toEqual(89);
  });
});
