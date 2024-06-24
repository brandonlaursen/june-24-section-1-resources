const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const aCounter = require("../problems/01-for-loop-translation");

describe("aCounter", function() {
  it('aCounter("apple") evaluates to 1', function () {
    expect(aCounter("apple")).to.eq(1);
  });
  it('aCounter("appleapple") evaluates to 2', function () {
    expect(aCounter("appleapple")).to.eq(2);
  });
  it('aCounter("aAapple") evaluates to 3', function () {
    expect(aCounter("aAapple")).to.eq(3);
  });
  it('should use a for loop instead of a while loop', function () {
    const forRe = /\n\s*for.*{/;
    const whileRe = /\n\s*while.*{/;
    const func = aCounter.toString();
    expect(func, "aCounter must use a for loop").to.match(forRe);
    expect(func, "aCounter should not use a while loop").to.not.match(whileRe);
  });
});
