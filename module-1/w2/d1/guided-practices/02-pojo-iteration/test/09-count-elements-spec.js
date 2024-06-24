const chai = require("chai");
const expect = chai.expect;
const countElements = require("../problems/09-count-elements");

describe("countElements", function() {
  it("countElements(['app', 1, 2, 'app', 2, 2]) evaluates to { app: 2, 1: 1, 2: 3 }", function () {
    expect(countElements(['app', 1, 2, 'app', 2, 2])).to.eql({ app: 2, 1: 1, 2: 3 });
  });
});
