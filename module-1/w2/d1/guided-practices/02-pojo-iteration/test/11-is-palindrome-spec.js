const chai = require("chai");
const expect = chai.expect;
const isPalindrome = require("../problems/11-is-palindrome");

describe("isPalindrome", function() {
  it("isPalindrome('pop') returns true", function () {
    expect(isPalindrome('pop')).to.be.true;
  });
  it("isPalindrome('kayak') returns true", function () {
    expect(isPalindrome('kayak')).to.be.true;
  });
  it("isPalindrome('yo banana boy') returns true", function () {
    expect(isPalindrome('yo banana boy')).to.be.true;
  });
  it("isPalindrome('this is the truth') returns false", function () {
    expect(isPalindrome('this is the truth')).to.be.false;
  });
  it("isPalindrome('abab') returns true", function () {
    expect(isPalindrome('abab')).to.be.true;
  });
});
