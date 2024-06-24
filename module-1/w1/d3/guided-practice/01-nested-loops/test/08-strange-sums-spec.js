const chai = require("chai");
const expect = chai.expect;
const strangeSums = require("../problems/08-strange-sums");

describe("strangeSums", function () {
  it("strangeSums([2, -3, 3, 4, -2])) should return 2", function () {
    expect(strangeSums([2, -3, 3, 4, -2])).to.eq(2);
  });
  it("strangeSums([42, 3, -1, -42])) should return 1", function () {
    expect(strangeSums([42, 3, -1, -42])).to.eq(1);
  });
  it("strangeSums([-5, 5])) should return 1", function () {
    expect(strangeSums([-5, 5])).to.eq(1);
  });
  it("strangeSums([19, 6, -3, -20])) should return 0", function () {
    expect(strangeSums([19, 6, -3, -20])).to.eq(0);
  });
  it("strangeSums([19, 6, -3, -20])) should return 0", function () {
    expect(strangeSums([19, 6, -3, -20])).to.eq(0);
  });
});
