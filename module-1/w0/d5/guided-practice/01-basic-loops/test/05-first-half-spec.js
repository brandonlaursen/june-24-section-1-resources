const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const firstHalf = require("../problems/05-first-half");

describe("firstHalf", function() {
  it('firstHalf("academy") evaluates to "acad"', function () {
    expect(firstHalf("academy")).to.eq("acad");
  });
  it('firstHalf("planet") evaluates to "pla"', function () {
    expect(firstHalf("planet")).to.eq("pla");
  });
  it('firstHalf("sport") evaluates to "spo"', function () {
    expect(firstHalf("sport")).to.eq("spo");
  });
});
