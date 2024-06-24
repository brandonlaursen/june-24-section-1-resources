const chai = require("chai");
const expect = chai.expect;
const charactersNotQuiteAtTheEdge = require("../problems/04-commenting-code");

describe("charactersNotQuiteAtTheEdge", function() {
  it('charactersNotQuiteAtTheEdge("fringe") returns "rg"', function () {
    expect(charactersNotQuiteAtTheEdge("fringe")).to.eq("rg");
  });
  it('charactersNotQuiteAtTheEdge("academy") returns "cm"', function () {
    expect(charactersNotQuiteAtTheEdge("academy")).to.eq("cm");
  });
});
