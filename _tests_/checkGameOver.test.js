import { checkGameOver } from "../services/checkGameOver";

describe("Return the right boolean", () => {
  test("should return true if no moves are left", () => {
    expect(
      checkGameOver([
        [2, 4, 8, 16],
        [32, 64, 128, 256],
        [512, 1024, 2, 8],
        [2, 4, 16, 32],
      ])
    ).toEqual(true);
  });
  test("should return false if moves are left", () => {
    expect(
      checkGameOver([
        [2, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 2, 0],
        [2, 0, 0, 0],
      ])
    ).toEqual(false);
  });
});
