const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-spies'));
const fs = require('fs');

describe('02-code-comments.js', function() {
  let consoleSpy;
  before(() => {
    consoleSpy = chai.spy.on(console, 'log');
    require('../problems/02-code-comments');
  });

  after(() => {
    chai.spy.restore(console);
  });

  it('prints out "Welcome to App Academy!"', function() {
    expect(consoleSpy).to.be.called.with("Welcome to App Academy!");
  });

  it('added a single-line comment', function() {
    const re = /^\/\//;
    const linesMatched = fs.readFileSync(__dirname + '/../problems/02-code-comments.js', 'utf-8')
      .split('\n')
      .map(line => line.trim())
      .filter(line => re.test(line));
    expect(linesMatched.length).to.eq(4);
  });

  it('added a multi-line comment', function() {
    const re = /\/\*/;
    const linesMatched = fs.readFileSync(__dirname + '/../problems/02-code-comments.js', 'utf-8')
      .split('\n')
      .map(line => line.trim())
      .filter(line => re.test(line));
    expect(linesMatched.length).to.eq(5);
  });
});
