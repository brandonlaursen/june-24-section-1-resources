const chai = require("chai");
const expect = chai.expect;
const threeOrSeven = require("../problems/03-three-or-seven");

describe("threeOrSeven(num)", function () {
  it("threeOrSeven(num) returns 3 if the number is divisible by 3", function () {
    expect(threeOrSeven(9)).to.eq(3);
  });

  it("threeOrSeven(num) returns 7 if the number is divisible by 7", function () {
    expect(threeOrSeven(77)).to.eq(7);
  });

  it("threeOrSeven(num) returns 21 if the number is divisible by both 3 and 7", function () {
    expect(threeOrSeven(84)).to.eq(21);
  });

  it("threeOrSeven(num) returns the original number if it does not meet the previous requirements", function () {
    expect(threeOrSeven(0)).to.eq(0);
    expect(threeOrSeven(100)).to.eq(100);
  });
});
