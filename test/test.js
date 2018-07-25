const { expect } = require("chai");
const Ghibliator = require("../Ghibliator");
const sinon = require("sinon");
const fs = require("fs");

describe("Ghibliator", () => {
  let ghibliator;
  let readFileSync;

  beforeEach(() => {
    ghibliator = new Ghibliator();
  });

  afterEach(() => {
    readFileSync.restore();
  });

  describe("getAverageAge", () => {
    beforeEach(() => {
      readFileSync = sinon.stub(fs, "readFileSync").callsFake(() => {
        return `[{ "age": "17" }, { "age": "late teens" }]`;
      });
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
    beforeEach(() => {
      readFileSync = sinon.stub(fs, "readFileSync").callsFake(() => {
        return (
          `[{ "name": "San", "films": ["a", "b"] }, ` +
          `{ "name": "Baron Humbert von Gikkingen", "films": ["a", "b"] }]`
        );
      });
    });

    it("should return a number", () => {
      const actual = new Ghibliator().appearances("San");
      expect(actual).to.be.a("number");
    });

    it("should call fs.readFileSync", () => {
      ghibliator.appearances("San");
      sinon.assert.calledOnce(readFileSync);
    });

    it("should call readFileSync with correct arguments", () => {
      ghibliator.appearances("San");
      sinon.assert.calledWith(readFileSync, "./data.json", "utf-8");
    });

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
