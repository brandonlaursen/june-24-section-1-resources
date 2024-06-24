const chai = require("chai");
const expect = chai.expect;
const getScores = require("../problems/10-get-scores");

describe("getScores", function() {
  it("getScores(arr) returns an object with the name of all objects as keys and the score as values", function () {
    expect(getScores([
      { name: 'Tracy', score: 3 },
      { name: 'Daniel', score: 1 },
      { name: 'Nick', score: 2 },
      { name: 'Peggy', score: 0 },
    ])).to.eql({ Tracy: 3, Daniel: 1, Nick: 2, Peggy: 0 });
  });
});
