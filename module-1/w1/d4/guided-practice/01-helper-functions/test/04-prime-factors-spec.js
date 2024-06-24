const chai = require("chai");
const expect = chai.expect;
const { primeFactors } = require("../problems/04-prime-factors");

describe("primeFactors", function () {
  it("primeFactors(12) returns [2, 3]", function () {
    expect(primeFactors(12)).to.eql([2, 3]);
  });
  it("primeFactors(7) returns [7]", function () {
    expect(primeFactors(7)).to.eql([7]);
  });
  it("primeFactors(16) returns [2]", function () {
    expect(primeFactors(16)).to.eql([2]);
  });
  it("primeFactors(30) returns [2, 3, 5]", function () {
    expect(primeFactors(30)).to.eql([2, 3, 5]);
  });
  it("primeFactors(35) returns [5, 7]", function () {
    expect(primeFactors(35)).to.eql([5, 7]);
  });
  it("primeFactors(49) returns [7]", function () {
    expect(primeFactors(49)).to.eql([7]);
  });
  it("primeFactors(128) returns [2]", function () {
    expect(primeFactors(128)).to.eql([2]);
  });
});
