const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const medianNum = require("../problems/01-debugging");

describe("medianNum", function() {
  it('medianNum([1, 2, 3, 4, 5, 6]) returns 4', function () {
    expect(medianNum([1, 2, 3, 4, 5, 6])).to.eq(4);
  });
  it('medianNum([5, 8, 90]) returns 8', function () {
    expect(medianNum([5, 8, 90])).to.eq(8);
  });
  it('medianNum([5, 7, 8, 90]) returns 8', function () {
    expect(medianNum([5, 7, 8, 90])).to.eq(8);
  });
  it('medianNum([]) returns null', function () {
    expect(medianNum([])).to.eq(null);
  });
  it('medianNum([3]) returns 3', function () {
    expect(medianNum([3])).to.eq(3);
  });
});
