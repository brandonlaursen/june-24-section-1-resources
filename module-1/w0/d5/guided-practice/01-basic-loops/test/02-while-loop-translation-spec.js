const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const eCounter = require("../problems/02-while-loop-translation");

describe("eCounter", function() {
  it('eCounter("apple") evaluates to 1', function () {
    expect(eCounter("apple")).to.eq(1);
  });
  it('eCounter("appleapple") evaluates to 2', function () {
    expect(eCounter("appleapple")).to.eq(2);
  });
  it('eCounter("AppleEe") evaluates to 3', function () {
    expect(eCounter("AppleEe")).to.eq(3);
  });
  it('should use a for loop instead of a while loop', function () {
    const forRe = /\n\s*for.*{/;
    const whileRe = /\n\s*while.*{/;
    const func = eCounter.toString();
    expect(func, "eCounter must use a while loop").to.match(whileRe);
    expect(func, "eCounter should not use a for loop").to.not.match(forRe);
  });
});
