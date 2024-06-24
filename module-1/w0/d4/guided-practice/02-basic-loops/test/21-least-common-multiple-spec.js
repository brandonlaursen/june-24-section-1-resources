const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const leastCommonMultiple = require("../problems/21-least-common-multiple");

describe("leastCommonMultiple", function() {
  it('leastCommonMultiple(4, 6) returns 12', function () {
    expect(leastCommonMultiple(4, 6)).to.eq(12);
  });
  it('leastCommonMultiple(3, 15) returns 15', function () {
    expect(leastCommonMultiple(3, 15)).to.eq(15);
  });
  it('leastCommonMultiple(2, 10) returns 10', function () {
    expect(leastCommonMultiple(2, 10)).to.eq(10);
  });
});
