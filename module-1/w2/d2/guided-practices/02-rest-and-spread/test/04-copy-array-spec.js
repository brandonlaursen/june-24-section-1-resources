const chai = require("chai");
const expect = chai.expect;
const { arr, arrRest, arrSpread, obj, objRest, objSpread } = require("../problems/04-copy-array");

describe("04-copy-array.js", function() {
  it("arrRest evaluates to a copy of arr", function() {
    expect(arrRest).to.not.eq(arr);
    expect(arrRest).to.eql(arr);
  });
  it("arrSpread evaluates to a copy of arr", function() {
    expect(arrSpread).to.not.eq(arr);
    expect(arrSpread).to.eql(arr);
  });
  it("objRest evaluates to a copy of obj", function() {
    expect(objRest).to.not.eq(obj);
    expect(objRest).to.eql(obj);
  });
  it("objSpread evaluates to a copy of obj", function() {
    expect(objSpread).to.not.eq(obj);
    expect(objSpread).to.eql(obj);
  });
});
