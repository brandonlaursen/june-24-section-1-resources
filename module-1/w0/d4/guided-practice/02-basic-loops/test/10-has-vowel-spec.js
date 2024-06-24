const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const hasVowel = require("../problems/10-has-vowel");

describe("hasVowel", function() {
  it('hasVowel("dog") returns true', function () {
    expect(hasVowel("dog")).to.be.true;
  });
  it('hasVowel("conventional") returns true', function () {
    expect(hasVowel("conventional")).to.be.true;
  });
  it('hasVowel("rhythm") returns false', function () {
    expect(hasVowel("rhythm")).to.be.false;
  });
});
