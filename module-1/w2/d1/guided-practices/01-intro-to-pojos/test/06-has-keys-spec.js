const chai = require("chai");
const expect = chai.expect;
const hasKeys = require("../problems/06-has-keys");

describe("06-has-keys.js", function() {
  it("hasKeys({ name: 'Check', question: 'Satisfied?', choices: ['Yes', 'No'] }, ['question', 'choices']) evaluates to true", function () {
    expect(hasKeys({
      name: 'Check',
      question: 'Satisfied?',
      choices: ['Yes', 'No'] 
    }, [
      'question',
      'choices'
    ])).to.be.true;
  });
  it("hasKeys({ name: 'Check', question: 'Satisfied?', choices: ['Yes', 'No'] }, ['numSubmissions', 'choices']) evaluates to false", function () {
    expect(hasKeys({
      name: 'Check',
      question: 'Satisfied?',
      choices: ['Yes', 'No'] 
    }, [
      'numSubmissions',
      'choices'
    ])).to.be.false;
  });
});
