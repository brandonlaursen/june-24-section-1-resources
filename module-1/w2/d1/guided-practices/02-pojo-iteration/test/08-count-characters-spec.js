const chai = require("chai");
const expect = chai.expect;
const countCharacters = require("../problems/08-count-characters");

describe("countCharacters", function() {
  it("countCharacters('hello') evaluates to { h: 1, e: 1, l: 2, o: 1 }", function () {
    expect(countCharacters('hello')).to.eql({ h: 1, e: 1, l: 2, o: 1 });
  });
});
