const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;

describe("01-declare-key-values.js", function() {
  let consoleSpy;
  let obj;
  before(() => {
    consoleSpy = chai.spy.on(console, 'log');
    obj = require("../problems/01-declare-key-values");
  });

  after(() => {
    chai.spy.restore(console);
  });

  it("prints 'firstValue' first", function () {
    expect(consoleSpy).on.nth(1).be.called.with('firstValue');
    expect(obj["firstKey"]).to.eq('firstValue');
  });
  it("prints '2' second", function () {
    expect(consoleSpy).on.nth(2).be.called.with(2);
    expect(obj["numeric"]).to.eq(2);
  });
  it("prints 'false' third", function () {
    expect(consoleSpy).on.nth(3).be.called.with(false);
    expect(obj["boolean"]).to.eq(false);
  });
  it("prints '{ hello: \"world!\" }' last", function () {
    expect(consoleSpy).on.nth(4).be.called.with({ hello: "world!" });
    expect(obj["object"]).to.eql({ hello: "world!" });
  });
});
