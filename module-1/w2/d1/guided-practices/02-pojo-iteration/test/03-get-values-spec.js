const chai = require("chai");
const expect = chai.expect;
const getValues = require("../problems/03-get-values");

describe("getValues", function() {
  it("getValues({ make: 'Toyota', model: 'Corolla', year: 2011 }) evaluates to ['Toyota', 'Corolla', 2011]", function () {
    expect(getValues({
      make: 'Toyota',
      model: 'Corolla',
      year: 2011
    })).to.have.members([
      'Toyota', 'Corolla', 2011
    ]);
  });
});
