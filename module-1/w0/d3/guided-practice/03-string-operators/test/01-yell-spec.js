const chai = require("chai");
const expect = chai.expect;
const yell = require("../problems/01-yell");

describe("yell", function () {
  it("yell('I want to go to the store') returns 'I WANT TO GO TO THE STORE!!!'", function () {
    const result = yell('I want to go to the store');
    expect(result).to.eql("I WANT TO GO TO THE STORE!!!");
  });
  it("yell('Time to program') returns 'TIME TO PROGRAM!!!", function () {
    const result = yell("Time to program");
    expect(result).to.eql("TIME TO PROGRAM!!!");
  });
});
