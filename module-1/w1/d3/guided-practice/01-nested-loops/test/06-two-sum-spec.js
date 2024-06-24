const chai = require("chai");
const expect = chai.expect;
const twoSum = require("../problems/06-two-sum");

describe("twoSum", function () {
  it("twoSum(array, target)) should return a boolean", function () {
    expect(twoSum([4, 6, 2, 3], 8)).to.be.true;
  });
  it("twoSum([1, 7, 3, 0, 2], 5)) should return true", function () {
    expect(twoSum([1, 7, 3, 0, 2], 5)).to.be.true;
  });
  it("twoSum([1, 7, 3, 0, 2], 6) should return false", function () {
    expect(twoSum([1, 7, 3, 0, 2], 6)).to.be.false;
  });
  it("twoSum([4, 6, 2, 3], 8) should return true", function () {
    expect(twoSum([4, 6, 2, 3], 8)).to.be.true;
  });
  it("twoSum([4, 6, 2, 3], 11) should return false", function () {
    expect(twoSum([4, 6, 2, 3], 11)).to.be.false;
  });
});
