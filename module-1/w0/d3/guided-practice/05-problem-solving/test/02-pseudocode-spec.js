const chai = require("chai");
const expect = chai.expect;
const within5Of100 = require("../problems/02-pseudocode");

describe("within5Of100", function() {
  it('within5Of100(94) returns false', function () {
    expect(within5Of100(94)).to.be.false;
  });
  it('within5Of100(95) returns true', function () {
    expect(within5Of100(95)).to.be.true;
  });
  it('within5Of100(100) returns true', function () {
    expect(within5Of100(100)).to.be.true;
  });
  it('within5Of100(105) returns true', function () {
    expect(within5Of100(105)).to.be.true;
  });
  it('within5Of100(106) returns false', function () {
    expect(within5Of100(106)).to.be.false;
  });
});
