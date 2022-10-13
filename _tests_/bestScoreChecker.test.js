import { bestScoreChecker } from "../services/bestScoreChecker";

describe("Return the right boolean", () => {
  test("should return true if score is bigger than bestscore", () => {
    expect(bestScoreChecker(500, 100)).toEqual(true);
  });
  test("should return false if score is lower than bestscore", () => {
    expect(bestScoreChecker(100, 500)).toEqual(false);
  });
});
