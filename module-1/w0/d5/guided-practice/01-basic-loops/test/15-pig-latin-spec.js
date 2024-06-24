const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const pigLatin = require("../problems/15-pig-latin");

describe("pigLatin", function() {
  it('pigLatin("apple") returns appleyay', function () {
    expect(pigLatin("apple")).to.eq("appleyay");
  });
  it('pigLatin("eat") returns eatyay', function () {
    expect(pigLatin("eat")).to.eq("eatyay");
  });
  it('pigLatin("banana") returns ananabay', function () {
    expect(pigLatin("banana")).to.eq("ananabay");
  });
  it('pigLatin("trash") returns ashtray', function () {
    expect(pigLatin("trash")).to.eq("ashtray");
  });
});
