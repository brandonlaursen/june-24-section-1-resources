const chai = require("chai");
const expect = chai.expect;
const uncompress = require("../problems/14-uncompress");

describe("uncompress", function () {
  it("uncompress('x3y4z2') should return 'xxxyyyyzz'", function () {
    expect(uncompress("x3y4z2")).to.eq("xxxyyyyzz");
  });
  it("uncompress('a5b2c4z1') should return 'aaaaabbccccz'", function () {
    expect(uncompress("a5b2c4z1")).to.eq("aaaaabbccccz");
  });
  it("uncompress('b1o2t1') should return 'boot'", function () {
    expect(uncompress("b1o2t1")).to.eq("boot");
  });
});
