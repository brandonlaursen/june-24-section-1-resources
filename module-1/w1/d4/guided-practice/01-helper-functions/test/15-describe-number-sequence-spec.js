const chai = require("chai");
const expect = chai.expect;
const {
  describeNumberSequence,
  describeCount,
} = require("../problems/15-describe-number-sequence");

describe("describeCount", function () {
  it("describeCount('1', 1) returns true", function () {
    expect(describeCount("1", 1)).to.eq("11");
  });
  it("describeCount('1', 2) returns true", function () {
    expect(describeCount("1", 2)).to.eq("21");
  });
  it("describeCount('1', 3) returns true", function () {
    expect(describeCount("1", 3)).to.eq("31");
  });
  it("describeCount('7', 5) returns true", function () {
    expect(describeCount("7", 5)).to.eq("57");
  });
});

describe("describeNumberSequence", function () {
  it("describeNumberSequence('233') returns '1223'", function () {
    expect(describeNumberSequence("233")).to.eq("1223");
  });
  it("describeNumberSequence('1') returns '11'", function () {
    expect(describeNumberSequence("1")).to.eq("11");
  });
  it("describeNumberSequence('1211') returns '111221'", function () {
    expect(describeNumberSequence("1211")).to.eq("111221");
  });
  it("describeNumberSequence('34') returns '1314'", function () {
    expect(describeNumberSequence("34")).to.eq("1314");
  });
});
