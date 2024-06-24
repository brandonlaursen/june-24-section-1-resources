const chai = require("chai");
const expect = chai.expect;
const averageOfTwo = require("../problems/03-average-of-two");

describe("averageOfTwo", function () {
  it("averageOfTwo(3, 7) returns 5", function () {
    expect(averageOfTwo(3, 7)).to.eq(5);
  });
  it("averageOfTwo(16, 5) returns 10.5", function () {
    expect(averageOfTwo(16, 5)).to.eq(10.5);
  });
  it("averageOfTwo(2, 7.5) returns 4.75", function () {
    expect(averageOfTwo(2, 7.5)).to.eq(4.75);
  });
});
