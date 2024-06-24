const chai = require("chai");
const expect = chai.expect;
const turnNumIntoStr = require("../problems/01-research-on-mdn");

describe("turnNumIntoStr", function () {
  it("turnNumIntoStr(10) returns '10'", function () {
    expect(turnNumIntoStr(10)).to.eq('10');
  });
  it("turnNumIntoStr(100) returns '100'", function () {
    expect(turnNumIntoStr(100)).to.eq('100');
  });
  it("turnNumIntoStr(80045) returns '80045'", function () {
    expect(turnNumIntoStr(80045)).to.eq('80045');
  });
});
