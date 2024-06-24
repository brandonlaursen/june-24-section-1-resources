const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const removeLastVowel = require("../problems/01-remove-last-vowel");

describe("removeLastVowel", function() {
  it("removeLastVowel('bootcamp') returns bootcmp", function () {
    expect(removeLastVowel('bootcamp')).to.eq('bootcmp');
  });
  it("removeLastVowel('better') returns bettr", function () {
    expect(removeLastVowel('better')).to.eq('bettr');
  });
  it("removeLastVowel('graph') returns grph", function () {
    expect(removeLastVowel('graph')).to.eq('grph');
  });
  it("removeLastVowel('thy') returns thy", function () {
    expect(removeLastVowel('thy')).to.eq('thy');
  });
});
