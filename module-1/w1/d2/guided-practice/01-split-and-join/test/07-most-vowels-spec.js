const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const mostVowels = require("../problems/07-most-vowels");

describe("mostVowels", function() {
  it("mostVowels('what a wonderful life') returns wonderful", function () {
    expect(mostVowels('what a wonderful life')).to.eq('wonderful');
  });
  it("mostVowels('the quick brown fox jumps') returns quick", function () {
    expect(mostVowels('the quick brown fox jumps')).to.eq('quick');
  });
  it("mostVowels('') returns ''", function () {
    expect(mostVowels('')).to.eq('');
  });
});
