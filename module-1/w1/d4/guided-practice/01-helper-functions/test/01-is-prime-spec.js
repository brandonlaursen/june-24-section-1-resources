const chai = require("chai");
const expect = chai.expect;
const isPrime = require("../problems/01-is-prime");

describe("isPrime", function() {
  it("isPrime(2) returns true", function () {
    expect(isPrime(2)).to.eq(true);
  });
  it("isPrime(10) returns false", function () {
    expect(isPrime(10)).to.eq(false);
  });
  it("iisPrime(11) returns true", function () {
    expect(isPrime(11)).to.eq(true);
  });
  it("isPrime(9) returns false", function () {
    expect(isPrime(9)).to.eq(false);
  });
  it("isPrime(2017) returns true", function () {
    expect(isPrime(2017)).to.eq(true);
  });
});
