const chai = require("chai");
const expect = chai.expect;
const { allFriendsStartWithA, allFriendsUnder10Years } = require("../problems/04-my-every");

describe("04-my-every.js", function() {
  it("allFriendsStartWithA evaluates to false", function () {
    expect(allFriendsStartWithA).to.be.false;
  });
  it("allFriendsUnder10Years evaluates to true", function () {
    expect(allFriendsUnder10Years).to.be.true;
  });
});
