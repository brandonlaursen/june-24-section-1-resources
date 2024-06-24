const chai = require("chai");
const expect = chai.expect;
const { summationSequence } = require("../problems/11-summation-sequence");

describe("summationSequence", function () {
  it("summationSequence(3, 4)) returns [3, 6, 21, 231]", function () {
    expect(summationSequence(3, 4)).to.eql([3, 6, 21, 231]);
  });
  it("summationSequence(5, 3)) returns [5, 15, 120]", function () {
    expect(summationSequence(5, 3)).to.eql([5, 15, 120]);
  });
  it("summationSequence(1, 2)) returns [ 1, 1 ]", function () {
    expect(summationSequence(1, 2)).to.eql([1, 1]);
  });
  it("summationSequence(6, 1)) returns [ 6 ]", function () {
    expect(summationSequence(6, 1)).to.eql([6]);
  });
  it("summationSequence(2, 3)) returns [ 2, 3, 6 ]", function () {
    expect(summationSequence(2, 3)).to.eql([2, 3, 6]);
  });
});
