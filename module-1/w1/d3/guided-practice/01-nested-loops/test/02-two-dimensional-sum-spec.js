const chai = require("chai");
const expect = chai.expect;
const twoDimensionalSum = require("../problems/02-two-dimensional-sum");

let arr = [[], [100, 200, 300]];

let arr2 = [[], []];

describe("twoDimensionalSum", function () {
  it("twoDimensionalSum(arr) should return a number representing the sum", function () {
    expect(twoDimensionalSum(arr)).to.be.a("number");
  });
  it("twoDimensionalSum([[], [100, 200, 300]]) should return 600", function () {
    expect(twoDimensionalSum([[], [100, 200, 300]])).to.eq(600);
  });
  it("twoDimensionalSum([[],[]) should return 0", function () {
    expect(twoDimensionalSum([[], []])).to.eq(0);
  });
});
