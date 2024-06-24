const chai = require("chai");
const expect = chai.expect;
const divideByThree = require("../problems/04-divide-by-three");

describe("divideByThree", function () {
  it("divideByThree(9) returns 3", function () {
    expect(divideByThree(9)).to.eq(3);
  });
  it("divideByThree(15) returns 5", function () {
    expect(divideByThree(15)).to.eq(5);
  });
  it("divideByThree(98) returns 32.666666666666664", function () {
    expect(divideByThree(98)).to.eq(32.666666666666664);
  });
});
