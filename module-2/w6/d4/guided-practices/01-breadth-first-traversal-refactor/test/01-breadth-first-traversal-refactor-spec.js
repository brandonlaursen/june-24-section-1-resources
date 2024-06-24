const chai = require('chai');
const expect = chai.expect;
const breadthFirstTraversal = require('../problems/01-breadth-first-traversal-refactor');

describe('breadthFirstTraversal', function() {
  it('breadthFirstTraversal(3) returns [3, 2, 4, 1, 5, 6]', function() {
    expect(breadthFirstTraversal(3)).to.eql([3, 2, 4, 1, 5, 6]);
  });

  it('breadthFirstTraversal(6) returns [6, 4, 3, 5, 2, 1]', function() {
    expect(breadthFirstTraversal(6)).to.eql([6, 4, 3, 5, 2, 1]);
  });

  it('breadthFirstTraversal(4) returns [4, 3, 5, 6, 2, 1]', function() {
    expect(breadthFirstTraversal(4)).to.eql([4, 3, 5, 6, 2, 1]);
  });
});
