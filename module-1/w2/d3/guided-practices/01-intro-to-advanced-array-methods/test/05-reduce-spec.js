const chai = require("chai");
const expect = chai.expect;
const totalYears = require("../problems/05-reduce");

describe("05-reduce.js", function() {
  it("totalYears evaluates to 19", function () {
    expect(totalYears).to.eq(19);
  });
});
