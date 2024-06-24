const chai = require("chai");
const expect = chai.expect;
const matrixAddition = require("../problems/11-matrix-addition");

let matrixA = [
  [2, 5],
  [4, 7],
];

let matrixB = [
  [9, 1],
  [3, 0],
];

let matrixC = [
  [-1, 0],
  [0, -1],
];

let matrixD = [
  [2, -5],
  [7, 10],
  [0, 1],
];

let matrixE = [
  [0, 0],
  [12, 4],
  [6, 3],
];

describe("matrixAddition", function () {
  it("matrixAddition(matrixA, matrixB)) should return [ [11, 6], [7, 7] ]", function () {
    expect(matrixAddition(matrixA, matrixB)).to.eql([
      [11, 6],
      [7, 7],
    ]);
  });
  it("matrixAddition(matrixA, matrixC)) should return [ [1, 5], [4, 6] ]", function () {
    expect(matrixAddition(matrixA, matrixC)).to.eql([
      [1, 5],
      [4, 6],
    ]);
  });
  it("matrixAddition(matrixB, matrixC)) should return [ [8, 1], [3, -1] ]", function () {
    expect(matrixAddition(matrixB, matrixC)).to.eql([
      [8, 1],
      [3, -1],
    ]);
  });

  it("matrixAddition(matrixD, matrixE)) should return [ [2, -5], [19, 14], [6, 4] ]", function () {
    expect(matrixAddition(matrixD, matrixE)).to.eql([
      [2, -5],
      [19, 14],
      [6, 4],
    ]);
  });
});
