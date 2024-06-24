const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const hasDoubleLetter = require("../problems/23-has-double-letter");

describe("hasDoubleLetter", function() {
  it('hasDoubleLetter("deer") returns true', function () {
    expect(hasDoubleLetter("deer")).to.be.true;
  });
  it('hasDoubleLetter("boot camp") returns true', function () {
    expect(hasDoubleLetter("boot camp")).to.be.true;
  });
  it('hasDoubleLetter("toggle") returns true', function () {
    expect(hasDoubleLetter("toggle")).to.be.true;
  });
  it('hasDoubleLetter("taco") returns false', function () {
    expect(hasDoubleLetter("taco")).to.be.false;
  });
  it('hasDoubleLetter("jumper") returns false', function () {
    expect(hasDoubleLetter("jumper")).to.be.false;
  });
  it('hasDoubleLetter(18) returns null', function () {
    expect(hasDoubleLetter(18)).to.be.null;
  });
  it('hasDoubleLetter(["array"]) returns null', function () {
    expect(hasDoubleLetter(["array"])).to.be.null;
  });
});
