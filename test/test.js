const { expect } = require("chai");
const Ghibliator = require("../Ghibliator");

describe("Ghibliator", () => {
  it("should return average age of characters", () => {
    // setup
    const expected = 33;
    const delta = 1;

    // exercise
    const actual = new Ghibliator().getAverageAge();

    // assert
    expect(actual).closeTo(actual, expected, delta);

    // teardown
  });

  it("should return appearances", () => {
    // setup
    const expected = 2;

    // exercise
    const actual = new Ghibliator().appearances("Baron Humbert von Gikkingen");

    // assert
    expect(actual).to.equal(actual, expected);

    // teardown
  });
});
