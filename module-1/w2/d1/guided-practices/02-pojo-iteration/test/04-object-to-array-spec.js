const chai = require("chai");
const expect = chai.expect;
const objectToArray = require("../problems/04-object-to-array");

describe("objectToArray", function() {
  it("objectToArray({ hello: \"world!\", bootcamp: \"App Academy\" }) evaluates to [['hello', 'world!'], ['bootcamp', 'App Academy']]", function () {
    expect(objectToArray({ hello: "world!", bootcamp: "App Academy" })).to.have.deep.members([
      ['hello', 'world!'],
      ['bootcamp', 'App Academy']
    ]);
  });
});
