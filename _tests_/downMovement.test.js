import { downMovement } from "../services/movements/downMovement";
import * as func from "../services/showRandom";

func.showRandom = jest.fn().mockReturnValue([2, 3, 3]);

describe("Return the right values to the right indexes when swiped down", () => {
  test("should return the expectedReturn when no moves allowed", () => {
    const expectedReturn = [
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [2, 2, 2, 0],
      ],
      false,
      20,
      [
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
      ],
      [
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
      ],
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
    ];
    expect(
      downMovement(
        [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [2, 2, 2, 0],
        ],
        20
      )
    ).toEqual(expectedReturn);
  });
  test("should return the expectedReturn when moves are allowed", () => {
    const expectedReturn = [
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [2, 2, 4, 2],
      ],
      false,
      4,
      [
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, true],
      ],
      [
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, true, false],
      ],
      [
        [3, 3, 3, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
    ];
    const actual = downMovement(
      [
        [2, 2, 2, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 2, 0],
      ],
      0
    );
    expect(actual).toEqual(expectedReturn);
  });
});
