const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const elementsOfOddIndicesReversed = require("../problems/04-elements-of-odd-indices-reversed");

describe("elementsOfOddIndicesReversed", function() {
  it('elementsOfOddIndicesReversed("academy") evaluates to "mdc"', function () {
    expect(elementsOfOddIndicesReversed("academy")).to.eq("mdc");
  });
  it('elementsOfOddIndicesReversed("planet") evaluates to "tnl"', function () {
    expect(elementsOfOddIndicesReversed("planet")).to.eq("tnl");
  });
  it('elementsOfOddIndicesReversed("sport") evaluates to "rp"', function () {
    expect(elementsOfOddIndicesReversed("sport")).to.eq("rp");
  });
});
