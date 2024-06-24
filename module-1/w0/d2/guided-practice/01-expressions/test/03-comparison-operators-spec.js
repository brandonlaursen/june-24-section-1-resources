const chai = require("chai");
const expect = chai.expect;
const comparisons = require('../problems/03-comparison-operators');

describe('03-comparison-operators.js', () => {
  it('the variable "expression1" should be set to true or false', () => {
    expect(btoa(comparisons.expression1) === "ZmFsc2U=", "expression1 is not the correct value").to.be.true;
  });

  it('the variable "expression2" should be set to false and false', () => {
    expect(btoa(comparisons.expression2) === "ZmFsc2U=", "expression2 is not the correct value").to.be.true;
  });

  it('the variable "predictExpression3" should be set to the correct value', () => {
    expect(btoa(comparisons.predictExpression3) === "ZmFsc2U=", "predictExpression3 is not the correct value").to.be.true;
  });

  it('the variable "predictExpression4" should be set to the correct value', () => {
    expect(btoa(comparisons.predictExpression4) === "dHJ1ZQ==", "predictExpression4 is not the correct value").to.be.true;
  });
});
