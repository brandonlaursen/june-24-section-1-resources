require("./setup-tests");
const chai = require("chai");
const expect = chai.expect;

let avgValue;
try {
  avgValue = require("../problems/01-avg-value");
} catch {}

describe("01 - avgValue", () => {
  describe("should return the average value of all the numbers in the input array", () => {
    it("avgValue([1, 2, 3, 5, 6, 7]) should return 4", () => {
      expect(avgValue([1, 2, 3, 5, 6, 7])).to.eq(4);
    });
    it("avgValue([3, 2]) should return 2.5", () => {
      expect(avgValue([3, 2])).to.eq(2.5);
    });
    it("avgValue([-10, -18]) should return -14", () => {
      expect(avgValue([-10, -18])).to.eq(-14);
    });
    it("avgValue([]) should return 0", () => {
      expect(avgValue([])).to.eq(0);
    });
  });
});
