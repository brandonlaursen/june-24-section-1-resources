const chai = require("chai");
const expect = chai.expect;
const goodbye = require("../problems/01-goodbye");

describe("goodbye", function () {
  it("goodbye('Daniel') returns 'Bye Daniel.'", function () {
    expect(goodbye("Daniel")).to.eq("Bye Daniel.");
  });
  it("goodbye('Mark') returns 'Bye Mark.'", function () {
    expect(goodbye("Mark")).to.eq("Bye Mark.");
  });
  it("goodbye('Beyonce') returns 'Bye Beyonce.'", function () {
    expect(goodbye("Beyonce")).to.eq("Bye Beyonce.");
  });
});
