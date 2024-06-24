const chai = require("chai");
const expect = chai.expect;
const spreadItOut = require("../problems/02-spread-it-out");

describe("02-spread-it-out.js", function() {
  it("spreadItOut([3,5,6], [1,2,3]) evaluates to [3,5,6,1,2,3]", function () {
    expect(spreadItOut([3,5,6], [1,2,3])).to.eql([3,5,6,1,2,3]);
  });
  it("spreadItOut([], [1,2,3]) evaluates to [1,2,3]", function () {
    expect(spreadItOut([], [1,2,3])).to.eql([1,2,3]);
  });
  it("spreadItOut(['apple', 'banana'], [1,2,3]) evaluates to 0", function () {
    expect(spreadItOut(['apple', 'banana'], [1,2,3])).to.eql(["apple", "banana", 1, 2, 3]);
  });
});
