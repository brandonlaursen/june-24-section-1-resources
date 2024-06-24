const chai = require("chai");
const expect = chai.expect;
const funnyStringConcat = require("../problems/03-funny-string-concat");

describe("funnyStringConcat", function() {
  it('funnyStringConcat("abc", "def") returns "abcdef"', function () {
    expect(funnyStringConcat("abc", "def")).to.eq("abcdef");
  });
  it('funnyStringConcat("number", "soldier") returns "numier"', function () {
    expect(funnyStringConcat("number", "soldier")).to.eq("numier");
  });
});
