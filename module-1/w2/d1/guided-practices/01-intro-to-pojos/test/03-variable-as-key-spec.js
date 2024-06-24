const chai = require("chai");
const expect = chai.expect;
const variableAsKey = require("../problems/03-variable-as-key");

describe("03-variable-as-key.js", function() {
  it("variableAsKey({ hello: \"world!\" }, 'hello') evaluates to 'world!'", function () {
    expect(variableAsKey({ hello: "world!" }, 'hello')).to.eq('world!');
  });
});
