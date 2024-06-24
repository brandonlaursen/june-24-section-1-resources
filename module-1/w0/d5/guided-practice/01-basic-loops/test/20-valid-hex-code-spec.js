const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const validHexCode = require("../problems/20-valid-hex-code");


// console.log(validHexCode("#123456"));  // true
// console.log(validHexCode("!123456"));  // false
// console.log(validHexCode("#123"));     // false
// console.log(validHexCode("#1234567")); // false
// console.log(validHexCode("1234567"));  // false
// console.log(validHexCode("123456"));   // false
// console.log(validHexCode("#ABCDEF"));  // true
// console.log(validHexCode("#abcDEF"));  // true
// console.log(validHexCode("#88ef29"));  // true
// console.log(validHexCode("#222!E4"));  // false

describe("validHexCode", function() {
  it('validHexCode("#123456") returns true', function () {
    expect(validHexCode("#123456")).to.be.true;
  });
  it('validHexCode("!123456") returns false', function () {
    expect(validHexCode("!123456")).to.be.false;
  });
  it('validHexCode("#123") returns false', function () {
    expect(validHexCode("#123")).to.be.false;
  });
  it('validHexCode("#1234567") returns false', function () {
    expect(validHexCode("#1234567")).to.be.false;
  });
  it('validHexCode("1234567") returns false', function () {
    expect(validHexCode("1234567")).to.be.false;
  });
  it('validHexCode("123456") returns false', function () {
    expect(validHexCode("123456")).to.be.false;
  });
  it('validHexCode("#ABCDEF") returns true', function () {
    expect(validHexCode("#ABCDEF")).to.be.true;
  });
  it('validHexCode("#abcDEF") returns true', function () {
    expect(validHexCode("#abcDEF")).to.be.true;
  });
  it('validHexCode("#88ef29") returns true', function () {
    expect(validHexCode("#88ef29")).to.be.true;
  });
  it('validHexCode("#222!E4") returns false', function () {
    expect(validHexCode("#222!E4")).to.be.false;
  });
});
