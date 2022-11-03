import { rightMovement } from "../services/movements/rightMovement";
import * as func from "../services/showRandom";

func.showRandom = jest.fn().mockReturnValue([2, 0, 3]);

describe("Return the right values to the right indexes when swiped right", () => {
  test("should return the expectedReturn when no moves allowed", () => {
    const expectedReturn = [
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 2],
        [0, 0, 0, 2],
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
      rightMovement(
        [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 2],
          [0, 0, 0, 2],
        ],
        20
      )
    ).toEqual(expectedReturn);
  });
  test("should return the expectedReturn when moves are allowed", () => {
    const expectedReturn = [
      [
        [0, 0, 0, 2],
        [0, 0, 0, 0],
        [0, 0, 0, 2],
        [0, 0, 0, 4],
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
        [false, false, false, true],
      ],
      [
        [0, 0, 3, 3],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
    ];
    const actual = rightMovement(
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [2, 0, 0, 0],
        [2, 0, 0, 2],
      ],
      0
    );
    expect(actual).toEqual(expectedReturn);
  });
});
