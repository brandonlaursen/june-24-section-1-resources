const chai = require("chai");
const expect = chai.expect;
const beCool = require("../problems/02-be-cool");

describe("beCool", function() {
  it("beCool('Music') returns 'Music is cool!'", function () {
    expect(beCool('Music')).to.eq("Music is cool!");
  });
  it("beCool('JavaScript') returns 'JavaScript is cool!'", function () {
    expect(beCool('JavaScript')).to.eq("JavaScript is cool!");
  });
  it("beCool('The world') returns 'The world is cool!'", function () {
    expect(beCool('The world')).to.eq("The world is cool!");
  });
});
