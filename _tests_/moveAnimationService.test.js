import { moveAnimationService } from "../services/playGridServices/moveAnimationService";

describe("Return the right steps", () => {
  test("should return 0 if steps undefined", () => {
    expect(moveAnimationService("UP", undefined)).toEqual(0);
  });
  test("should multiply by 3 when steps are more than 3", () => {
    expect(moveAnimationService("UP", 5, 89)).toEqual(-89 * 3);
  });
  test("should return the right values when direction is UP and steps are valid", () => {
    expect(moveAnimationService("UP", 1, 89)).toEqual(-89 * 1);
  });
  test("should return the right values when direction is DOWN and steps are valid", () => {
    expect(moveAnimationService("DOWN", 1, 89)).toEqual(89 * 1);
  });
  test("should return the right values when direction is LEFT and steps are valid", () => {
    expect(moveAnimationService("UP", 1, 160)).toEqual(-160 * 1);
  });
  test("should return the right values when direction is RIGHT and steps are valid", () => {
    expect(moveAnimationService("RIGHT", 1, 160)).toEqual(160 * 1);
  });
});
