const chai = require("chai");
const expect = chai.expect;
const pairProduct = require("../problems/07-pair-product");

describe("pairProduct", function () {
  it("pairProduct(arr, product) should return a boolean", function () {
    expect(pairProduct([3, 4], 12)).to.be.true;
  });
  it("pairProduct([4, 2, 5, 8], 16)) should return true", function () {
    expect(pairProduct([4, 2, 5, 8], 16)).to.be.true;
  });
  it("pairProduct([4, 2, 5, 8], 16)) should return true", function () {
    expect(pairProduct([8, 1, 9, 3], 8)).to.be.true;
  });
  it("pairProduct([3, 4], 12) should return true", function () {
    expect(pairProduct([3, 4], 12)).to.be.true;
  });
  it("pairProduct([3, 4, 6, 2, 5], 12) should return true", function () {
    expect(pairProduct([3, 4, 6, 2, 5], 12)).to.be.true;
  });
  it("pairProduct([4, 2, 5, 7], 16) should return false", function () {
    expect(pairProduct([4, 2, 5, 7], 16)).to.be.false;
  });

  it("pairProduct([8, 4, 9, 3], 8) should return false", function () {
    expect(pairProduct([8, 4, 9, 3], 8)).to.be.false;
  });

  it("pairProduct([3], 12) should return false", function () {
    expect(pairProduct([3], 12)).to.be.false;
  });
});
