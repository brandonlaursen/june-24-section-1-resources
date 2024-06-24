const chai = require("chai");
const expect = chai.expect;
const unique = require("../problems/09-unique");

describe("unique", function () {
  it("unique([1, 1, 2, 3, 3]) should return [1, 2, 3]", function () {
    expect(unique([1, 1, 2, 3, 3])).to.eql([1, 2, 3]);
  });
  it("unique([11, 7, 8, 10, 8, 7, 7]) should return [11, 7, 8, 10]", function () {
    expect(unique([11, 7, 8, 10, 8, 7, 7])).to.eql([11, 7, 8, 10]);
  });
  it("unique(['a', 'b', 'c', 'b']) should return ['a', 'b', 'c']", function () {
    expect(unique(["a", "b", "c", "b"])).to.eql(["a", "b", "c"]);
  });
});
