const chai = require("chai");
const expect = chai.expect;
const pairsMaker = require("../problems/01-pairs-maker");

let team = ["Brandon", "Charles", "Trevor", "Maica"];

describe("pairsMaker", function () {
  it("pairsMaker(array) should return a 2D array where the subarrays represent unique pairs of elements from the input array", function () {
    expect(pairsMaker(team)).to.eql([
      ["Brandon", "Charles"],
      ["Brandon", "Trevor"],
      ["Brandon", "Maica"],
      ["Charles", "Trevor"],
      ["Charles", "Maica"],
      ["Trevor", "Maica"],
    ]);
  });
  it("pairsMaker(array) should return unique pairs", function () {
    expect(pairsMaker(team)).to.not.eql([
      ["Brandon", "Brandon"],
      ["Brandon", "Trevor"],
      ["Brandon", "Maica"],
      ["Charles", "Charles"],
      ["Charles", "Maica"],
      ["Trevor", "Maica"],
    ]);
  });

  it("pairsMaker(['a', 'b', 'c', 'd']) should return [ [ 'a', 'b' ], [ 'a', 'c' ], [ 'a', 'd' ], [ 'b', 'c' ], [ 'b', 'd' ], [ 'c', 'd' ] ]", function () {
    expect(pairsMaker(["a", "b", "c", "d"])).to.eql([
      ["a", "b"],
      ["a", "c"],
      ["a", "d"],
      ["b", "c"],
      ["b", "d"],
      ["c", "d"],
    ]);
  });

  it("pairsMaker(['Rosemary', 'Alex', 'Connor']) should return [ ['Rosemary', 'Alex'], ['Rosemary', 'Connor'], ['Alex', 'Connor'] ]", function () {
    expect(pairsMaker(["Rosemary", "Alex", "Connor"])).to.eql([
      ["Rosemary", "Alex"],
      ["Rosemary", "Connor"],
      ["Alex", "Connor"],
    ]);
  });
});
