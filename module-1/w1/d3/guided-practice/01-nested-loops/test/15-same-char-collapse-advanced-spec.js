const chai = require("chai");
const expect = chai.expect;
const sameCharCollapse = require("../problems/15-same-char-collapse-advanced");

describe("sameCharCollapse", function() {
  it("sameCharCollapse('zzzxaaxy') returns zy", function () {
    expect(sameCharCollapse('zzzxaaxy')).to.eq('zy');
  });
  it("sameCharCollapse('uqrssrqvtt') returns uv", function () {
    expect(sameCharCollapse('uqrssrqvtt')).to.eq('uv');
  });
});
