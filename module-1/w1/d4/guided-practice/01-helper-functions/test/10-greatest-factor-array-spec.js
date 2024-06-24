const chai = require("chai");
const expect = chai.expect;
const { greatestFactorArray } = require("../problems/10-greatest-factor-array");

describe("greatestFactorArray", function () {
  it("greatestFactorArray([16, 7, 9, 14]) returns [8, 7, 9, 7]", function () {
    expect(greatestFactorArray([16, 7, 9, 14])).to.eql([8, 7, 9, 7]);
  });
  it("greatestFactorArray([30, 3, 24, 21, 10]) returns [15, 3, 12, 21, 5]", function () {
    expect(greatestFactorArray([30, 3, 24, 21, 10])).to.eql([15, 3, 12, 21, 5]);
  });
  it("greatestFactorArray([1, 2, 3, 4, 5]) returns [1, 2, 3, 2, 5]", function () {
    expect(greatestFactorArray([1, 2, 3, 4, 5])).to.eql([1, 2, 3, 2, 5]);
  });
  it("greatestFactorArray([10, 20, 30, 40, 50]) returns [5, 10, 15, 20, 25]", function () {
    expect(greatestFactorArray([10, 20, 30, 40, 50])).to.eql([5, 10, 15, 20, 25]);
  });
  it("greatestFactorArray([23, 43, 54, 65, 12]) returns [23, 43, 27, 65, 6]", function () {
    expect(greatestFactorArray([23, 43, 54, 65, 12])).to.eql([23, 43, 27, 65, 6]);
  });
});
