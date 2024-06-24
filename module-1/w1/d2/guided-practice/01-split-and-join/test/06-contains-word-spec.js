const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const containsWord = require("../problems/06-contains-word");

describe("containsWord", function() {
  it("containsWord('sounds like a plan', 'like') returns true", function () {
    expect(containsWord('sounds like a plan', 'like')).to.be.true;
  });
  it("containsWord('They are great', 'they') returns true", function () {
    expect(containsWord('They are great', 'they')).to.be.true;
  });
  it("containsWord('caterpillars are great animals', 'cat') returns false", function () {
    expect(containsWord('caterpillars are great animals', 'cat')).to.be.false;
  });
  it("containsWord('Cast the net', 'internet') returns false", function () {
    expect(containsWord('Cast the net', 'internet')).to.be.false;
  });
});
