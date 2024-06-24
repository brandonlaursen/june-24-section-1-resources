const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-spies'));

describe('01-variables.js', function() {
  let consoleSpy;
  let obj;
  before(() => {
    consoleSpy = chai.spy.on(console, 'log');
    obj = require('../problems/01-variables');
  });

  after(() => {
    chai.spy.restore(console);
  });

  it('Declares and assigns a variable called "firstName" to a string', function() {
    if (!("firstName" in obj)) throw new ReferenceError("firstName is not defined");
    expect(obj.firstName).to.be.a.string;
  });

  it('Declares and assigns a variable called "lastName" to a string', function() {
    if (!("lastName" in obj)) throw new ReferenceError("lastName is not defined");
    expect(obj.lastName).to.be.a.string;
  });

  it('Declares and assigns a variable called "age" to a number', function() {
    if (!("age" in obj)) throw new ReferenceError("age is not defined");
    expect(!isNaN(obj.age)).to.be.true;
  });

  it('prints out the values of "firstName", "lastName", and "age" (in that order)', function() {
    expect(consoleSpy).on.nth(1).be.called.with(obj.firstName);
    expect(consoleSpy).on.nth(2).be.called.with(obj.lastName);
    expect(consoleSpy).on.nth(3).be.called.with(undefined);
    expect(consoleSpy).on.nth(4).be.called.with(obj.firstName);
    expect(consoleSpy).on.nth(5).be.called.with(obj.lastName);
    expect(consoleSpy).on.nth(6).be.called.with(obj.age);
  });
});
