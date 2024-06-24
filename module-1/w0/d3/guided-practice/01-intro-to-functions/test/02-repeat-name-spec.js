const chai = require("chai");
const expect = chai.expect;
const repeatName = require("../problems/02-repeat-name");

describe("repeatName", function () {
  it("logging repeatDaniel outputs 'Daniel Daniel'", function () {
    const result = repeatName("Daniel");
    expect(result).to.eql("Daniel Daniel");
  });
  it("logging repeatMark outputs 'Mark Mark'", function () {
    const result = repeatName("Mark");
    expect(result).to.eql("Mark Mark");
  });
  it("logging repeatBeyonce outputs '!!!Beyonce Beyonce!!!'", function () {
    const result = "!!!" + repeatName("Beyonce") + "!!!";
    expect(result).to.eql("!!!Beyonce Beyonce!!!");
  });
});
