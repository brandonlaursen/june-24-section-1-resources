const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const vowelCounter = require("../problems/09-vowel-counter");

describe("vowelCounter", function() {
  it('vowelCounter("bootcamp") returns 3', function () {
    expect(vowelCounter("bootcamp")).to.eq(3);
  });
  it('vowelCounter("apple") returns 2', function () {
    expect(vowelCounter("apple")).to.eq(2);
  });
  it('vowelCounter("pizza") returns 2', function () {
    expect(vowelCounter("pizza")).to.eq(2);
  });
  it('vowelCounter("try") returns 0', function () {
    expect(vowelCounter("try")).to.eq(0);
  });
});
