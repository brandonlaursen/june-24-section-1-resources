const chai = require("chai");
const expect = chai.expect;
const plusFive = require("../problems/02-plus-five");

describe("plusFive", function () {
  it("plusFive(10) returns 15", function () {
    expect(plusFive(10)).to.eq(15);
  });
  it("plusFive(2) returns 7", function () {
    expect(plusFive(2)).to.eq(7);
  });
  it("plusFive(-8) returns -3", function () {
    expect(plusFive(-8)).to.eq(-3);
  });
});
