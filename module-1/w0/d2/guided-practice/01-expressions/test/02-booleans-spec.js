const chai = require("chai");
const expect = chai.expect;
const booleans = require('../problems/02-booleans');

describe('02-booleans.js', () => {
  it('the variable "expression1" should be set to true or false', () => {
    expect(btoa(booleans.expression1) === "dHJ1ZQ==", "expression1 is not the correct value").to.be.true;
  });

  it('the variable "expression2" should be set to false and false', () => {
    expect(btoa(booleans.expression2) === "ZmFsc2U=", "expression2 is not the correct value").to.be.true;
  });

  it('the variable "expression3" should be set to false or true and true', () => {
    expect(
      btoa(booleans.expression3) === "dHJ1ZQ==",
      "expression3 is not the correct value"
    ).to.be.true;
  });

  it('the variable "predictExpression4" should be set to the correct value', () => {
    expect(btoa(booleans.predictExpression4) === "dHJ1ZQ==", "predictExpression4 is not the correct value").to.be.true;
  });

  it('the variable "predictExpression5" should be set to the correct value', () => {
    expect(btoa(booleans.predictExpression5) === "ZmFsc2U=", "predictExpression5 is not the correct value").to.be.true;
  });

  it('the variable "predictExpression6" should be set to the correct value', () => {
    expect(btoa(booleans.predictExpression6) === "dHJ1ZQ==", "predictExpression6 is not the correct value").to.be.true;
  });

  it('the variable "predictExpression7" should be set to the correct value', () => {
    expect(btoa(booleans.predictExpression7) === "dHJ1ZQ==", "predictExpression7 is not the correct value").to.be.true;
  });
});
