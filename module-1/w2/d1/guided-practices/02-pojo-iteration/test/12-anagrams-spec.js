const chai = require("chai");
const expect = chai.expect;
const areAnagrams = require("../problems/12-are-anagrams");

describe("areAnagrams", function() {
  it("areAnagrams('cat', 'act') returns true", function () {
    expect(areAnagrams('cat', 'act')).to.be.true;
  });
  it("areAnagrams('restful', 'fluster') returns true", function () {
    expect(areAnagrams('restful', 'fluster')).to.be.true;
  });
  it("areAnagrams('cat', 'dog') returns false", function () {
    expect(areAnagrams('cat', 'dog')).to.be.false;
  });
  it("areAnagrams('boot', 'bootcamp') returns false", function () {
    expect(areAnagrams('boot', 'bootcamp')).to.be.false;
  });
  it("areAnagrams('bott', 'boot') returns false", function () {
    expect(areAnagrams('bott', 'boot')).to.be.false;
  });
});
