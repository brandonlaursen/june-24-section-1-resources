const chai = require('chai');
const expect = chai.expect;
const degreesOfSeparation = require('../problems/01-degrees-of-separation');

describe('degreesOfSeparation', function() {
  it('degreesOfSeparation(1, 3) returns 2', function() {
    expect(degreesOfSeparation(1, 3)).to.eq(2)
  });
  it('degreesOfSeparation(5, 2) returns 1', function() {
    expect(degreesOfSeparation(5, 2)).to.eq(1)
  });
  it('degreesOfSeparation(6, 1) returns null', function() {
    expect(degreesOfSeparation(6, 1)).to.be.null;
  });
});
