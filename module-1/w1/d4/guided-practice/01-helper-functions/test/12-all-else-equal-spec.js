const chai = require("chai");
const expect = chai.expect;
const { allElseEqual } = require("../problems/12-all-else-equal");

describe("allElseEqual", function () {
  it("allElseEqual([2, 4, 3, 10, 1]) returns 10", function () {
    expect(allElseEqual([2, 4, 3, 10, 1])).to.eq(10);
  });
  it("allElseEqual([6, 3, 5, -9, 1]) returns 3", function () {
    expect(allElseEqual([6, 3, 5, -9, 1])).to.eq(3);
  });
  it("allElseEqual([1, 2, 3, 4]) returns null", function () {
    expect(allElseEqual([1, 2, 3, 4])).to.eq(null);
  });
  it("allElseEqual([5, 6, 9, 15, -5]) returns 15", function () {
    expect(allElseEqual([5, 6, 9, 15, -5])).to.eq(15);
  });
  it("allElseEqual([10, 15, 25, 35]) returns null", function () {
    expect(allElseEqual([10, 15, 25, 35])).to.eq(null);
  });
});
