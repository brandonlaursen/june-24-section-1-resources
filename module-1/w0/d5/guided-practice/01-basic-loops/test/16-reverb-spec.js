const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const reverb = require("../problems/16-reverb");

describe("reverb", function() {
  it('reverb("running") returns runninging', function () {
    expect(reverb("running")).to.eq("runninging");
  });
  it('reverb("FAMILY") returns FAMILYILY', function () {
    expect(reverb("FAMILY")).to.eq("FAMILYILY");
  });
  it('reverb("trash") returns trashash', function () {
    expect(reverb("trash")).to.eq("trashash");
  });
  it('reverb("DISH") returns DISHISH', function () {
    expect(reverb("DISH")).to.eq("DISHISH");
  });
  it('reverb("197393") returns 197393', function () {
    expect(reverb("197393")).to.eq("197393");
  });
  it('reverb(197393) returns null', function () {
    expect(reverb(197393)).to.be.null;
  });
});
