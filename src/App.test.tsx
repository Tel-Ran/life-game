import React from 'react';

import LifeMatrix from "./services/LifeMatrix";

describe("life test suit", () => {
  const numbers = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]

  ];
  const expected = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]

  ];
  const lifeMatrix = new LifeMatrix(numbers)
  it("test from the task definition", () => {



    expect(lifeMatrix.nextStep()).toEqual(expected);

  })
  it("it should return to the initial state ", () => {


    expect(lifeMatrix.nextStep()).toEqual(numbers)
  })
})
