require("./setup-tests");
const chai = require("chai");
const expect = chai.expect;

let pitPat;
try {
  pitPat = require("../problems/03-pit-pat");
} catch {}

describe("03 - pitPat", () => {
  describe("should return the inclusive range of numbers that are divisible by either 4 or 6 but not by both from the min to the max number in an array", () => {
    context("the min number is less than or equal to the max number", () => {
      it("pitPat(0, 6) should return [4, 6]", () => {
        expect(pitPat(0, 6)).to.eql([4, 6]);
      });
      it("pitPat(12, 12) should return []", () => {
        expect(pitPat(12, 12)).to.eql([]);
      });
      it("pitPat(40, 50) should return [40, 42, 44]", () => {
        expect(pitPat(40, 50)).to.eql([40, 42, 44]);
      });
    });

    context("the min number is greater than the max number", () => {
      it("pitPat(22, 20) should return []", () => {
        expect(pitPat(22, 20)).to.eql([]);
      });
    });
  });
});
