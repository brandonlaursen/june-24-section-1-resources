const chai = require("chai");
const expect = chai.expect;
const zanyZip = require("../problems/13-zany-zip");

describe("zanyZip", function () {
  it("zanyZip([1, 2], ['eins', 'zwei', 'drei', 'vier']) should return [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]", function () {
    expect(zanyZip([1, 2], ["eins", "zwei", "drei", "vier"])).to.eql([
      [1, "eins"],
      [2, "zwei"],
      [null, "drei"],
      [null, "vier"],
    ]);
  });
  it("zanyZip([1, 2, 3, 4], ['eins', 'zwei', 'drei']) should return [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]", function () {
    expect(zanyZip([1, 2, 3, 4], ["eins", "zwei", "drei"])).to.eql([
      [1, "eins"],
      [2, "zwei"],
      [3, "drei"],
      [4, null],
    ]);
  });
  it("zanyZip(['alef', 'bet'], ['alpha', 'beta']) should return [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]", function () {
    expect(zanyZip(["alef", "bet"], ["alpha", "beta"])).to.eql([
      ["alef", "alpha"],
      ["bet", "beta"],
    ]);
  });
});
