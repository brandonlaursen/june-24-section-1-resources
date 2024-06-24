const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const secondHalf = require("../problems/06-second-half");

describe("secondHalf", function() {
  it('secondHalf("academy") evaluates to "emy"', function () {
    expect(secondHalf("academy")).to.eq("emy");
  });
  it('secondHalf("planet") evaluates to "net"', function () {
    expect(secondHalf("planet")).to.eq("net");
  });
  it('secondHalf("sport") evaluates to "rt"', function () {
    expect(secondHalf("sport")).to.eq("rt");
  });
});
