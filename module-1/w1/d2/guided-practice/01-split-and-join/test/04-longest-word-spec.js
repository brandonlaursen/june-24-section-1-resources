const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const longestWord = require("../problems/04-longest-word");

describe("longestWord", function() {
  it("longestWord('where did everyone go') returns everyone", function () {
    expect(longestWord('where did everyone go')).to.eq('everyone');
  });
  it("longestWord('prefer simplicity over complexity') returns simplicity", function () {
    expect(longestWord('prefer simplicity over complexity')).to.eq('simplicity');
  });
  it("longestWord('') returns ''", function () {
    expect(longestWord('')).to.eq('');
  });
});
