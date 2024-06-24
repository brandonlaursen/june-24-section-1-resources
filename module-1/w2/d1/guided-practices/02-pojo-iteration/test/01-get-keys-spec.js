const chai = require("chai");
const expect = chai.expect;
const getKeys = require("../problems/01-get-keys");

describe("getKeys", function() {
  it("getKeys({ hello: \"world!\", bootcamp: \"App Academy\" }) evaluates to ['hello', 'bootcamp']", function () {
    expect(getKeys({ hello: "world!", bootcamp: "App Academy" })).to.have.members([
      'hello', 'bootcamp'
    ]);
  });
});
