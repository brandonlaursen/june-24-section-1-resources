const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;

describe("01-forEach.js", function() {
  let consoleSpy;
  let obj;
  before(() => {
    consoleSpy = chai.spy.on(console, 'log');
    require("../problems/01-forEach");
  });

  after(() => {
    chai.spy.restore(console);
  });

  it("prints 'Albert: 3 years' first", function () {
    expect(consoleSpy).on.nth(1).be.called.with('Albert: 3 years');
  });
  it("prints 'Angela: 2 years' second", function () {
    expect(consoleSpy).on.nth(2).be.called.with('Angela: 2 years');
  });
  it("prints 'Freddy: 8 years' third", function () {
    expect(consoleSpy).on.nth(3).be.called.with('Freddy: 8 years');
  });
  it("prints 'Agatha: 6 years' last", function () {
    expect(consoleSpy).on.nth(4).be.called.with('Agatha: 6 years');
  });
});
