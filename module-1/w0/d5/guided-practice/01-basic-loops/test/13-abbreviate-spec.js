const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const abbreviate = require("../problems/13-abbreviate");

describe("abbreviate", function() {
  it('abbreviate("wonderful") returns wndrfl', function () {
    expect(abbreviate("wonderful")).to.eq("wndrfl");
  });
  it('abbreviate("mystery") returns mystry', function () {
    expect(abbreviate("mystery")).to.eq("mystry");
  });
  it('abbreviate("Accordian") returns ccrdn', function () {
    expect(abbreviate("Accordian")).to.eq("ccrdn");
  });
});
