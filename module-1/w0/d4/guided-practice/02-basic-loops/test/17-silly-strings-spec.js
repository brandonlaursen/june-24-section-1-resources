const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const sillyString = require("../problems/17-silly-strings");

describe("sillyString", function() {
  it('sillyString("stop") returns stobop', function () {
    expect(sillyString("stop")).to.eq("stobop");
  });
  it('sillyString("that") returns thabat', function () {
    expect(sillyString("that")).to.eq("thabat");
  });
  it('sillyString("can") returns caban', function () {
    expect(sillyString("can")).to.eq("caban");
  });
  it('sillyString("cats") returns cabats', function () {
    expect(sillyString("cats")).to.eq("cabats");
  });
  it('sillyString("italy") returns ibitabaly', function () {
    expect(sillyString("italy")).to.eq("ibitabaly");
  });
  it('sillyString("scooter") returns scobooboteber', function () {
    expect(sillyString("scooter")).to.eq("scobooboteber");
  });
});
