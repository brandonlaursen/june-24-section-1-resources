const chai = require('chai');
const expect = chai.expect;
const breadthFirstSearch = require('../problems/01-breadth-first-search');

describe('breadthFirstSearch', function() {
  it('breadthFirstSearch(1, 3) returns true', function() {
    expect(breadthFirstSearch(1, 3)).to.be.true;
  });
  it('breadthFirstSearch(4, 1) returns true', function() {
    expect(breadthFirstSearch(4, 1)).to.be.true;
  });
  it('breadthFirstSearch(6, 1) returns false', function() {
    expect(breadthFirstSearch(6, 1)).to.be.false;
  });
});
