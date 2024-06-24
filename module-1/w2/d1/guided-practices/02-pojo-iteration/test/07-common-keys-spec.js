const chai = require("chai");
const expect = chai.expect;
const commonKeys = require("../problems/07-common-keys");

describe("commonKeys", function() {
  it("commonKeys(obj1, obj2) returns all common keys", function () {
    expect(commonKeys(
      { species: 'Dog', color: 'Brown',  numLegs: 4 },
      { numLegs: 8, species: 'Octopus', lifeSpan: '2 years' }
    )).to.have.deep.members([ 'species', 'numLegs' ]);
  });
});
