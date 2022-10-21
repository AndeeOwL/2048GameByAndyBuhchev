import { rightMovement } from "../services/movements/rightMovement";

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
});
