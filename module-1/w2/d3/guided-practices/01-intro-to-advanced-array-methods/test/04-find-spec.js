const chai = require("chai");
const expect = chai.expect;
const threeVowelFriend = require("../problems/04-find");

describe("04-find.js", function() {
  it("threeVowelFriend evaluates to { name: 'Angela', yearsOfFriendship: 2 }", function () {
    expect(threeVowelFriend).to.eql({ name: 'Angela', yearsOfFriendship: 2 });
  });
});
