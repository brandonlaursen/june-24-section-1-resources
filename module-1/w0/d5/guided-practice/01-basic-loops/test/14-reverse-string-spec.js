const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const reverseString = require("../problems/14-reverse-string");

describe("reverseString", function() {
  it('reverseString("fish") returns hsif', function () {
    expect(reverseString("fish")).to.eq("hsif");
  });
  it('reverseString("marathon") returns nohtaram', function () {
    expect(reverseString("marathon")).to.eq("nohtaram");
  });
});
