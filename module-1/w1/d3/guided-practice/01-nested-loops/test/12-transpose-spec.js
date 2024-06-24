const chai = require("chai");
const expect = chai.expect;
const transpose = require("../problems/12-transpose");

describe("transpose", function () {
  it("transpose([ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]) should return [ [1, 4, 7], [2, 5, 8], [3, 6, 9] ]", function () {
    expect(
      transpose([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).to.eql([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ]);
  });
  it("transpose([ [1, 2], [3, 4], [5, 6] ]) should return  [ [1, 3, 5], [2, 4, 6] ]", function () {
    expect(
      transpose([
        [1, 2],
        [3, 4],
        [5, 6],
      ])
    ).to.eql([
      [1, 3, 5],
      [2, 4, 6],
    ]);
  });
});
