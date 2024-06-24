const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;

describe("02-key-deletion.js", function() {
  let consoleSpy;
  let obj;
  before(() => {
    consoleSpy = chai.spy.on(console, 'log');
    obj = require("../problems/02-key-deletion");
  });

  after(() => {
    chai.spy.restore(console);
  });

  it("deletes the key-value pair and prints an empty object", function () {
    expect(consoleSpy).on.nth(1).be.called.with({});
    expect(obj).to.eql({});
  });
});
