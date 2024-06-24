const chai = require("chai");
const expect = chai.expect;
const objectToArraySum = require("../problems/05-object-to-array-sum");

describe("objectToArraySum", function() {
  it("objectToArraySum({ n1: [10, 1, 3, 6], n5: [], n9: [5, 0, 3, 2] }) evaluates to [['n1', 20], ['n5', 0], ['n9', 10]]", function () {
    expect(objectToArraySum({ n1: [10, 1, 3, 6], n5: [], n9: [5, 0, 3, 2] })).to.have.deep.members([
      ['n1', 20],
      ['n5', 0],
      ['n9', 10]
    ]);
  });
});
