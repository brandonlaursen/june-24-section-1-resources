const chai = require("chai");
const expect = chai.expect;
const { prevPrime } = require("../problems/03-prev-prime");

describe("prevPrime", function () {
  it("prevPrime(32) returns 31", function () {
    expect(prevPrime(32)).to.eq(31);
  });
  it("prevPrime(33) returns 31", function () {
    expect(prevPrime(33)).to.eq(31);
  });
  it("prevPrime(14) returns 13", function () {
    expect(prevPrime(14)).to.eq(13);
  });
  it("prevPrime(7) returns 5", function () {
    expect(prevPrime(7)).to.eq(5);
  });
  it("prevPrime(4) returns 3", function () {
    expect(prevPrime(4)).to.eq(3);
  });
  it("prevPrime(2) returns null", function () {
    expect(prevPrime(2)).to.eq(null);
  });
});
