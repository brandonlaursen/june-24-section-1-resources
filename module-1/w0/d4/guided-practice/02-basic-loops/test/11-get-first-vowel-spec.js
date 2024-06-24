const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const getFirstVowel = require("../problems/11-get-first-vowel");

describe("getFirstVowel", function() {
  it('getFirstVowel("battery") returns a', function () {
    expect(getFirstVowel("battery")).to.eq("a");
  });
  it('getFirstVowel("tunnel") returns u', function () {
    expect(getFirstVowel("tunnel")).to.eq("u");
  });
  it('getFirstVowel("dog") returns o', function () {
    expect(getFirstVowel("dog")).to.eq("o");
  });
  it('getFirstVowel("conventional") returns o', function () {
    expect(getFirstVowel("conventional")).to.eq("o");
  });
  it('getFirstVowel("rhythm") returns null', function () {
    expect(getFirstVowel("rhythm")).to.be.null;
  });
  it('getFirstVowel("try") returns null', function () {
    expect(getFirstVowel("try")).to.be.null;
  });
});
