const chai = require("chai");
const expect = chai.expect;
const isFive = require("../problems/01-is-five");

describe("isFive", function () {
  it("isFive(5) returns 'is five'", function () {
    expect(isFive(5)).to.eq("is five");
  });
  it("isFive(13) returns null", function () {
    expect(isFive(13)).to.be.null;
  });
});
