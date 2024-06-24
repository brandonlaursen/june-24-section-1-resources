const chai = require("chai");
const expect = chai.expect;
const numbers = require('../problems/01-numbers');

describe('01-numbers.js', () => {
  it('the variable "expression1" should be set to five plus two', () => {
    expect(btoa(numbers.expression1) === "Nw==", "expression1 is not the correct value").to.be.true;
  });

  it('the variable "expression2" should be set to ten divided by five', () => {
    expect(btoa(numbers.expression2) === "Mg==", "expression2 is not the correct value").to.be.true;
  });

  it('the variable "expression3" should be set to the remainder of seven divided by five.', () => {
    expect(btoa(numbers.expression3) === "Mg==", "expression3 is not the correct value").to.be.true;
  });

  it('the variable "predictExpression4" should be set to the correct value', () => {
    expect(btoa(numbers.predictExpression4) === "NjU=", "predictExpression4 is not the correct value").to.be.true;
  });

  it('the variable "predictExpression5" should be set to the correct value', () => {
    expect(btoa(numbers.predictExpression5) === "MTQ=", "predictExpression5 is not the correct value").to.be.true;
  });

  it('the variable "predictExpression6" should be set to the correct value', () => {
    expect(btoa(numbers.predictExpression6) === "MjE=", "predictExpression6 is not the correct value").to.be.true;
  });

  it('the variable "predictExpression7" should be set to the correct value', () => {
    expect(btoa(numbers.predictExpression7) === "NQ==", "predictExpression7 is not the correct value").to.be.true;
  });
});
