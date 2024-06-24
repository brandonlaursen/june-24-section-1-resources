const chai = require("chai");
const expect = chai.expect;
const averageOfFour = require("../problems/05-average-of-four");

describe("averageOfFour", function () {
  it("averageOfFour(10, 10, 15, 5) returns 10", function () {
    expect(averageOfFour(10, 10, 15, 5)).to.eq(10);
  });
  it("averageOfFour(3, 10, 11, 4) returns 7", function () {
    expect(averageOfFour(3, 10, 11, 4)).to.eq(7);
  });
  it("averageOfFour(1, 2, 3, 4) returns 2.5", function () {
    expect(averageOfFour(1, 2, 3, 4)).to.eq(2.5);
  });
});
