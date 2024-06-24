const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-spies'));

describe('01-console-log.js', function() {
  let consoleSpy;
  before(() => {
    consoleSpy = chai.spy.on(console, 'log');
    require('../problems/01-console-log');
  });

  after(() => {
    chai.spy.restore(console);
  });

  it('prints out "Hello World!"', function() {
    expect(consoleSpy).on.nth(1).be.called.with("Hello World!");
  });

  it('prints out "Hello World!" and another separate message', function() {
    expect(consoleSpy).to.have.been.called.min(2);
  });
});
