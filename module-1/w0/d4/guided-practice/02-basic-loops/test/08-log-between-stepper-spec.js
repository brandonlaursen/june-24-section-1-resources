const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const logBetweenStepper = require("../problems/08-log-between-stepper");

describe("logBetweenStepper", function () {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = chai.spy.on(console, 'log');
  });

  afterEach(() => {
    chai.spy.restore(console);
  });

  it("logBetweenStepper(5, 9, 1) prints out all numbers from 5 to 9 in intervals of 1", function () {
    logBetweenStepper(5, 9, 1);
    expect(consoleSpy).on.nth(1).be.called.with(5);
    expect(consoleSpy).on.nth(2).be.called.with(6);
    expect(consoleSpy).on.nth(3).be.called.with(7);
    expect(consoleSpy).on.nth(4).be.called.with(8);
    expect(consoleSpy).on.nth(5).be.called.with(9);
  });
  it("logBetweenStepper(4, 8, 2) prints out all numbers from 4 to 8 in intervals of 2", function () {
    logBetweenStepper(4, 8, 2);
    expect(consoleSpy).on.nth(1).be.called.with(4);
    expect(consoleSpy).on.nth(2).be.called.with(6);
    expect(consoleSpy).on.nth(3).be.called.with(8);
  });
  it("logBetweenStepper(-10, 15, 5) prints out all numbers from -10 to 15 in intervals of 5", function () {
    logBetweenStepper(-10, 15, 5);
    expect(consoleSpy).on.nth(1).be.called.with(-10);
    expect(consoleSpy).on.nth(2).be.called.with(-5);
    expect(consoleSpy).on.nth(3).be.called.with(0);
    expect(consoleSpy).on.nth(4).be.called.with(5);
    expect(consoleSpy).on.nth(5).be.called.with(10);
    expect(consoleSpy).on.nth(6).be.called.with(15);
  });
});
