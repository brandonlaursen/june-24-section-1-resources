const chai = require("chai");
const expect = chai.expect;
const checkIfLastCharIsAnE = require("../problems/01-refactor-check-if-last-char-is-an-e");

describe("checkIfLastCharIsAnE", function() {
  it('checkIfLastCharIsAnE("stance") returns true', function () {
    expect(checkIfLastCharIsAnE("stance")).to.be.true;
  });
  it('checkIfLastCharIsAnE("FLOAT") returns false', function () {
    expect(checkIfLastCharIsAnE("FLOAT")).to.be.false;
  });
  it('checkIfLastCharIsAnE("PHONE") returns true', function () {
    expect(checkIfLastCharIsAnE("PHONE")).to.be.true;
  });
  it('should have only one line of code in the function body', function () {
    const re = /\n\s*\/\/.*/g;
    const func = checkIfLastCharIsAnE.toString().replace(re, '').split('\n');
    console.log(func);
    expect(func, "checkIfLastCharIsAnE must have only one line of code in the function body").to.have.length.within(1, 3);
  });
});
