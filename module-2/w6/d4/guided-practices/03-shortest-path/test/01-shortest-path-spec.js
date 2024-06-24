const chai = require('chai');
const expect = chai.expect;
const shortestPath = require('../problems/01-shortest-path');

describe('shortestPath', function() {
  it('shortestPath(1, 3) returns [ 1, 2, 3 ]', function() {
    expect(shortestPath(1, 3)).to.eql([ 1, 2, 3 ])
  });
  it('shortestPath(4, 1) returns [ 4, 5, 1 ]', function() {
    expect(shortestPath(4, 1)).to.eql([ 4, 5, 1 ])
  });
  it('shortestPath(6, 1) returns null', function() {
    expect(shortestPath(6, 1)).to.be.null;
  });
});
