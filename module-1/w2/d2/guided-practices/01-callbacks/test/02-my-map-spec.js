const chai = require("chai");
const expect = chai.expect;
const goodFriendsOrNot = require("../problems/02-my-map");

describe("02-my-map.js", function() {
  it("goodFriendsOrNot evaluates to [false, false, true, true]", function () {
    expect(goodFriendsOrNot).to.eql([false, false, true, true]);
  });
});
