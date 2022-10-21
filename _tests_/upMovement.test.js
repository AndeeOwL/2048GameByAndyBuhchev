import { upMovement } from "../services/movements/upMovement";

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
});
