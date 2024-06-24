const chai = require("chai");
const expect = chai.expect;
const { nextPrime } = require("../problems/02-next-prime");

describe("nextPrime", function () {
  it("nextPrime(2) returns 3", function () {
    expect(nextPrime(2)).to.eq(3);
  });
  it("nextPrime(3) returns 5", function () {
    expect(nextPrime(3)).to.eq(5);
  });
  it("nextPrime(7) returns 11", function () {
    expect(nextPrime(7)).to.eq(11);
  });
  it("nextPrime(8) returns 11", function () {
    expect(nextPrime(8)).to.eq(11);
  });
  it("nextPrime(20) returns 23", function () {
    expect(nextPrime(20)).to.eq(23);
  });
  it("nextPrime(97) returns 101", function () {
    expect(nextPrime(97)).to.eq(101);
  });
});
