const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const multiplesOfFive = require("../problems/07-multiples-of-five");

describe("multiplesOfFive", function() {
  it("multiplesOfFive(20) returns 4", function () {
    expect(multiplesOfFive(20)).to.eq(4);
  });
  it("multiplesOfFive(10) returns 2", function () {
    expect(multiplesOfFive(10)).to.eq(2);
  });
  it("multiplesOfFive(14) returns 3", function () {
    expect(multiplesOfFive(14)).to.eq(3);
  });
  it("multiplesOfFive(21) returns 5", function () {
    expect(multiplesOfFive(21)).to.eq(5);
  });
});
