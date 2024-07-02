require("./setup-tests");
const chai = require("chai");
const expect = chai.expect;

let exclusiveRange;
try {
  exclusiveRange = require("../problems/02-exclusive-range");
} catch {}

describe("02 - exclusiveRange", () => {
  describe("should return the exclusive range of numbers from the min to the max number in an array", () => {
    context("the min number is less than the max number", () => {
      it("exclusiveRange(0, 5) should return [1, 2, 3, 4]", () => {
        expect(exclusiveRange(0, 5)).to.eql([1, 2, 3, 4]);
      });
      it("exclusiveRange(81, 83) should return [82]", () => {
        expect(exclusiveRange(81, 83)).to.eql([82]);
      });
      it("exclusiveRange(100, 101) should return []", () => {
        expect(exclusiveRange(100, 101)).to.eql([]);
      });
    });

    context("the min number is equal to or greater than the max number", () => {
      it("exclusiveRange(50, 50) should return []", () => {
        expect(exclusiveRange(50, 50)).to.eql([]);
      });
      it("exclusiveRange(23, 22) should return []", () => {
        expect(exclusiveRange(23, 22)).to.eql([]);
      });
    });
  });
});
