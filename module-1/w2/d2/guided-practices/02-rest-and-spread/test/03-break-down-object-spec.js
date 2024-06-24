const chai = require("chai");
const expect = chai.expect;
const breakDownObj = require("../problems/03-break-down-object");

describe("03-break-down-object.js", function() {
  it("breakDownObj({ name: 'Rupert', age: 5, speak: 'Meow' }) evaluates to ['name', 'age', 'speak', 'Rupert', 5, 'Meow']", function () {
    expect(breakDownObj({ name: 'Rupert', age: 5, speak: 'Meow' })).to.eql(['name', 'age', 'speak', 'Rupert', 5, 'Meow']);
  });
  it("breakDownObj({ location: 'NY', borough: 'Brooklyn' }) evaluates to ['location', 'borough', 'NY', 'Brooklyn']", function () {
    expect(breakDownObj({ location: 'NY', borough: 'Brooklyn' })).to.eql(['location', 'borough', 'NY', 'Brooklyn']);
  });
});
