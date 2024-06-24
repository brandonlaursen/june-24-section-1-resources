const chai = require("chai");
const expect = chai.expect;
const maxInMatrix = require("../problems/04-max-in-matrix");

matrix = [
  [11, 2, -99],
  [20, 19, 10],
  [47, 72, 56],
];

describe("maxInMatrix", function () {
  it("maxInMatrix(matrix) should return a number", function () {
    expect(
      maxInMatrix([
        [1, 5],
        [8, 2],
      ])
    ).to.be.a("number");
  });
  it("maxInMatrix(matrix) should return 72", function () {
    expect(maxInMatrix(matrix)).to.eq(72);
  });
});
