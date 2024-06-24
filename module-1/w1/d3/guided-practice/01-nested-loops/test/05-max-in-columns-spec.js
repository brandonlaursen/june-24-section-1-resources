const chai = require("chai");
const expect = chai.expect;
const maxColumn = require("../problems/05-max-in-columns");

describe("maxColumn", function () {
  it("maxColumn(matrix) should return a an array containing the maximum value in each column", function () {
    expect(
      maxColumn([
        [5, 9, 21],
        [9, 19, 6],
        [12, 14, 15],
      ])
    ).to.be.an("array");
  });
  it("maxColumn(matrix) should return [12, 19, 21]", function () {
    expect(
      maxColumn([
        [5, 9, 21],
        [9, 19, 6],
        [12, 14, 15],
      ])
    ).to.eql([12, 19, 21]);
  });
});
