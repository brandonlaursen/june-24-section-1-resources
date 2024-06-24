const chai = require("chai");
const expect = chai.expect;
const twoDimensionalProduct = require("../problems/03-two-dimensional-product");

let arr1 = [[6, 4], [5], [3, 1]];

let arr2 = [[11, 4], [2]];

let arr3 = [
  [-9, 8, 4],
  [8, 2],
];

describe("twoDimensionalProduct", function () {
  it("twoDimensionalSum(arr) should return a number representing the product", function () {
    expect(twoDimensionalProduct(arr1)).to.be.a("number");
  });
  it("twoDimensionalProduct(arr1) should return 360", function () {
    expect(twoDimensionalProduct(arr1)).to.eq(360);
  });
  it("twoDimensionalProduct(arr2) should return 88", function () {
    expect(twoDimensionalProduct(arr2)).to.eq(88);
  });
  it("twoDimensionalProduct(arr3) should return -4608", function () {
    expect(twoDimensionalProduct(arr3)).to.eq(-4608);
  });
});
