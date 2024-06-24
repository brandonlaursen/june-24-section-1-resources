const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-spies'));

describe('02-add-lib.js', function() {
  let consoleSpy;
  let obj;
  before(() => {
    consoleSpy = chai.spy.on(console, 'log');
    obj = require('../problems/02-add-lib');
  });

  after(() => {
    chai.spy.restore(console);
  });

  it('prints out "I shall swim to the sparkly rainbow?" first', function() {
    expect(consoleSpy).on.nth(1).be.called.with(
      "I shall swim to the sparkly rainbow?"
    );
  });

  it('prints out "I shall RUN to the FANCY ParK?" second', function() {
    expect(consoleSpy).on.nth(2).be.called.with(
      "I shall RUN to the FANCY ParK?"
    );
  });
});
