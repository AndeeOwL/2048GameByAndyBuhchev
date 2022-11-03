import { upMovement } from "../services/movements/upMovement";
import * as func from "../services/showRandom";

func.showRandom = jest.fn().mockReturnValue([2, 0, 3]);

describe("Return the right values to the right indexes when swiped up", () => {
  test("should return the expectedReturn when no moves allowed", () => {
    const expectedReturn = [
      [
        [2, 2, 2, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
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
      upMovement(
        [
          [2, 2, 2, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        20
      )
    ).toEqual(expectedReturn);
  });
  test("should return the expectedReturn when moves are allowed", () => {
    const expectedReturn = [
      [
        [2, 2, 4, 2],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      false,
      4,
      [
        [false, false, false, true],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
      ],
      [
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, true, false],
      ],
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [3, 3, 3, 0],
      ],
    ];
    const actual = upMovement(
      [
        [0, 0, 2, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [2, 2, 2, 0],
      ],
      0
    );
    expect(actual).toEqual(expectedReturn);
  });
});
