const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const isPerfectSquare = require("../problems/18-is-perfect-square");

describe("isPerfectSquare", function() {
  it('isPerfectSquare(1) returns true', function () {
    expect(isPerfectSquare(1)).to.be.true;
  });
  it('isPerfectSquare(4) returns true', function () {
    expect(isPerfectSquare(4)).to.be.true;
  });
  it('isPerfectSquare(64) returns true', function () {
    expect(isPerfectSquare(64)).to.be.true;
  });
  it('isPerfectSquare(100) returns true', function () {
    expect(isPerfectSquare(100)).to.be.true;
  });
  it('isPerfectSquare(169) returns true', function () {
    expect(isPerfectSquare(169)).to.be.true;
  });
  it('isPerfectSquare(2) returns false', function () {
    expect(isPerfectSquare(2)).to.be.false;
  });
  it('isPerfectSquare(40) returns false', function () {
    expect(isPerfectSquare(40)).to.be.false;
  });
  it('isPerfectSquare(32) returns false', function () {
    expect(isPerfectSquare(32)).to.be.false;
  });
  it('isPerfectSquare(50) returns false', function () {
    expect(isPerfectSquare(50)).to.be.false;
  });
});
