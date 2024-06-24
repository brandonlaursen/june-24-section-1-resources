const chai = require("chai");
const expect = chai.expect;
// const isFive = require("../problems/odd-num-only");
const oddNumOnly = require("../problems/02-odd-num-only");

describe("oddNumOnly", function () {
  it("oddNumOnly(7) returns 'odd numbers only'", function () {
    expect(oddNumOnly(7)).to.eq(7);
  });
  it("oddNumOnly(12) returns null", function () {
    expect(oddNumOnly(12)).to.be.null;
  });
});
