const chai = require("chai");
const expect = chai.expect;
const filteredFriends = require("../problems/03-my-filter");

describe("03-my-filter.js", function() {
  it("filteredFriends evaluates to [ { name: 'Agatha', yearsOfFriendship: 6 } ]", function () {
    expect(filteredFriends).to.eql([ { name: 'Agatha', yearsOfFriendship: 6 } ]);
  });
});
