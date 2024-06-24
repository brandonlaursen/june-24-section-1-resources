const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const getLastVowel = require("../problems/12-get-last-vowel");

describe("getLastVowel", function() {
  it('getLastVowel("battery") returns e', function () {
    expect(getLastVowel("battery")).to.eq("e");
  });
  it('getLastVowel("tunnel") returns e', function () {
    expect(getLastVowel("tunnel")).to.eq("e");
  });
  it('getLastVowel("dog") returns o', function () {
    expect(getLastVowel("dog")).to.eq("o");
  });
  it('getLastVowel("conventional") returns a', function () {
    expect(getLastVowel("conventional")).to.eq("a");
  });
  it('getLastVowel("rhythm") returns null', function () {
    expect(getLastVowel("rhythm")).to.be.null;
  });
  it('getLastVowel("try") returns null', function () {
    expect(getLastVowel("try")).to.be.null;
  });
});
