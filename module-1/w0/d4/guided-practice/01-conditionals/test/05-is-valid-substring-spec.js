
const chai = require("chai");
const expect = chai.expect;

const isValidSubStr = require("../problems/05-is-valid-substring");

describe("isValidSubStr(str1, str2)", function () {
  it("isValidSubStr(str1,str2) should return a string of 'VALID' if the second string is part of the first string", function () {
    expect(isValidSubStr("pineapple", "apple")).to.eq("VALID");
  });

  it("isValidSubStr(str1,str2) should return a string of 'VALID' if the second string is part of the first string regardless of casing", function () {
    expect(isValidSubStr("pineaPPlE", "apple")).to.eq("VALID");
  });

  it("isValidSubStr(str1,str2) should return a string of 'INVALID' if the second string is NOT part of the first string", function () {
    expect(isValidSubStr("April showers bring may flowers", "rain")).to.eq(
      "INVALID"
    );
  });
});
