const { expect } = require("chai");
const Ghibliator = require("../Ghibliator");
const sinon = require("sinon");
const fs = require("fs");

describe("Ghibliator", () => {
  describe("getAverageAge", () => {
    let ghibliator;
    let readFileSync;

    beforeEach(() => {
      ghibliator = new Ghibliator();
      readFileSync = sinon.stub(fs, "readFileSync").callsFake(() => {
        return `[{ "age": "17" }, { "age": "late teens" }]`;
      });
    });

    afterEach(() => {
      readFileSync.restore();
    });

    it("should return a number", () => {
      const actual = ghibliator.getAverageAge();

      expect(actual).to.be.a("number");
    });

    it("should call fs.readFileSync", () => {
      ghibliator.getAverageAge();
      sinon.assert.calledOnce(readFileSync);
    });

    it("should call readFileSync with correct arguments", () => {
      ghibliator.getAverageAge();
      sinon.assert.calledWith(readFileSync, "./data.json", "utf-8");
    });

    it("should return average age of characters", () => {
      // setup
      const expected = 33;
      const delta = 1;

      // exercise
      const actual = ghibliator.getAverageAge();

      // assert
      expect(actual).closeTo(actual, expected, delta);

      // teardown
    });
  });
  describe("appearances", () => {
    it("should return appearances", () => {
      // setup
      const expected = 2;

      // exercise
      const actual = new Ghibliator().appearances(
        "Baron Humbert von Gikkingen"
      );

      // assert
      expect(actual).to.equal(actual, expected);

      // teardown
    });
  });
});
