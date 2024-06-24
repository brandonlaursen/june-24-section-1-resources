const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const fizzBuzz = require("../problems/19-fizz-buzz");

describe("fizzBuzz", function() {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = chai.spy.on(console, 'log');
  });

  afterEach(() => {
    chai.spy.restore(console);
  });

  it("fizzBuzz(20) prints out 3, 5, 6, 9, 10, 12, 18", function () {
    fizzBuzz(20);
    expect(consoleSpy).on.nth(1).be.called.with(3);
    expect(consoleSpy).on.nth(2).be.called.with(5);
    expect(consoleSpy).on.nth(3).be.called.with(6);
    expect(consoleSpy).on.nth(4).be.called.with(9);
    expect(consoleSpy).on.nth(5).be.called.with(10);
    expect(consoleSpy).on.nth(6).be.called.with(12);
    expect(consoleSpy).on.nth(7).be.called.with(18);
  });
});
