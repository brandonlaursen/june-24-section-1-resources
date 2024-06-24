const chai = require("chai");
const expect = chai.expect;
const { second, third, fifth, sixth } = require("../problems/01-array-destructuring");

describe("01-array-destructuring.js", function() {
  it("second evaluates to 14", function () {
    expect(second).to.eq(14);
  });
  it("third evaluates to 32", function () {
    expect(third).to.eq(32);
  });
  it("fifth evaluates to { name: 'party' }", function () {
    expect(fifth).to.eql({ name: 'party' });
  });
  it("sixth evaluates to ['pineapple']", function () {
    expect(sixth).to.eql(['pineapple']);
  });
});
