const chai = require("chai");
const expect = chai.expect;
const { choosePrimes } = require("../problems/05-choose-primes");

describe("choosePrimes", function () {
  it("choosePrimes([36, 48, 9, 13, 19]) returns [ 13, 19 ]", function () {
    expect(choosePrimes([36, 48, 9, 13, 19])).to.eql([13, 19]);
  });
  it("choosePrimes([5, 6, 4, 11, 2017]) returns [ 5, 11, 2017 ]", function () {
    expect(choosePrimes([5, 6, 4, 11, 2017])).to.eql([5, 11, 2017]);
  });
  it("choosePrimes([1, 2, 3, 5, 7, 9]) returns [ 2, 3, 5, 7 ]", function () {
    expect(choosePrimes([1, 2, 3, 5, 7, 9])).to.eql([2, 3, 5, 7]);
  });
  it("choosePrimes([4, 6, 8, 10, 12]) returns []", function () {
    expect(choosePrimes([4, 6, 8, 10, 12])).to.eql([]);
  });
  it("choosePrimes([10, 25, 2023, 4, 41]) returns  [ 41 ]", function () {
    expect(choosePrimes([10, 25, 2023, 4, 41])).to.eql([41]);
  });
});
