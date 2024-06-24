const chai = require("chai");
const expect = chai.expect;
const restSum = require("../problems/01-rest-sum");

describe("01-rest-sum.js", function() {
  it("restSum(3, 5, 6) evaluates to 14", function () {
    expect(restSum(3, 5, 6)).to.eq(14);
  });
  it("restSum(1, 2, 3, 4, 5, 6, 7, 8, 9) evaluates to 45", function () {
    expect(restSum(1, 2, 3, 4, 5, 6, 7, 8, 9)).to.eq(45);
  });
  it("restSum(0) evaluates to 0", function () {
    expect(restSum(0)).to.eq(0);
  });
});
