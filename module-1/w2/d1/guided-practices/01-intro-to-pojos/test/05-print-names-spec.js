const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const printNames = require("../problems/05-print-names");

describe("04-print-names", function() {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = chai.spy.on(console, 'log');
  });

  afterEach(() => {
    chai.spy.restore(console);
  });

  it("printNames([{ name: \"Joey\", likes: [\"sandwiches\"] }, { hobby: \"tells jokes\", name: \"Chandler\" }]) prints out 'Joey' then 'Chandler'", function () {
    printNames([
      { name: "Joey", likes: ["sandwiches"] },
      { hobby: "tells jokes", name: "Chandler" },
    ]);
    expect(consoleSpy).on.nth(1).be.called.with('Joey');
    expect(consoleSpy).on.nth(2).be.called.with('Chandler');
  });
});
