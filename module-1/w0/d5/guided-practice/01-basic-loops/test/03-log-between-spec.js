const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const logBetween = require("../problems/03-log-between");

describe("logBetween", function() {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = chai.spy.on(console, 'log');
  });

  afterEach(() => {
    chai.spy.restore(console);
  });

  it("logBetween(-1, 2) prints out all numbers from -1 to 2", function () {
    logBetween(-1, 2);
    expect(consoleSpy).on.nth(1).be.called.with(-1);
    expect(consoleSpy).on.nth(2).be.called.with(0);
    expect(consoleSpy).on.nth(3).be.called.with(1);
    expect(consoleSpy).on.nth(4).be.called.with(2);
  });
  it("logBetween(14, 6) prints nothing", function () {
    logBetween(14, 6);
    expect(consoleSpy).to.not.have.been.called;
  });
  it("logBetween(4, 7) prints out all numbers from 4 to 7", function () {
    logBetween(4, 7);
    expect(consoleSpy).on.nth(1).be.called.with(4);
    expect(consoleSpy).on.nth(2).be.called.with(5);
    expect(consoleSpy).on.nth(3).be.called.with(6);
    expect(consoleSpy).on.nth(4).be.called.with(7);
  });
});
