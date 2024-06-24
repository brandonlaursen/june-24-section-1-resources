const chai = require("chai");
const expect = chai.expect;
const strings = require('../problems/04-strings');

describe('04-strings.js', () => {
  it('the variable "expression1" should be set to true or false', () => {
    expect(btoa(strings.expression1) === "SGVsbG8gV29ybGQh", "expression1 is not the correct value").to.be.true;
  });

  it('the variable "expression2" should be set to false and false', () => {
    expect(btoa(strings.expression2) === "SA==", "expression2 is not the correct value").to.be.true;
  });

  it('the variable "expression3" should be set to false and false', () => {
    expect(btoa(strings.expression3) === "NA==", "expression3 is not the correct value").to.be.true;
  });

  it('the variable "predictExpression4" should be set to the correct value', () => {
    expect(btoa(strings.predictExpression4) === "ZA==", "predictExpression4 is not the correct value").to.be.true;
  });

  it('the variable "predictExpression5" should be set to the correct value', () => {
    expect(btoa(strings.predictExpression5) === "Mg==", "predictExpression5 is not the correct value").to.be.true;
  });

  it('the variable "predictExpression6" should be set to the correct value', () => {
    expect(btoa(strings.predictExpression6) === "TmFO", "predictExpression6 is not the correct value").to.be.true;
  });
});
