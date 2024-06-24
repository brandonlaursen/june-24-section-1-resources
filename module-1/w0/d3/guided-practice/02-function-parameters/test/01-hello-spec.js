const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const hello = require("../problems/01-hello");

describe("hello", function () {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = chai.spy.on(console, "log");
  });

  afterEach(() => {
    chai.spy.restore(console);
  });

  it('should log "Hello, cat!" to the console', function () {
    hello("cat");
    expect(consoleSpy).to.have.been.called.with("Hello, cat");
  });

  it('should log "Hello, Helen!" to the console', function () {
    hello("Helen");
    expect(consoleSpy).to.have.been.called.with("Hello, Helen");
  });

  it('should log "Hello, Sting!" to the console', function () {
    hello("Sting");
    expect(consoleSpy).to.have.been.called.with("Hello, Sting");
  });
});
