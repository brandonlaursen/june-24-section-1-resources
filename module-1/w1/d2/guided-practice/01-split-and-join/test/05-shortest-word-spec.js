const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const shortestWord = require("../problems/05-shortest-word");

describe("shortestWord", function() {
  it("shortestWord('what a wonderful life') returns a", function () {
    expect(shortestWord('what a wonderful life')).to.eq('a');
  });
  it("shortestWord('the quick brown fox jumps') returns fox", function () {
    expect(shortestWord('the quick brown fox jumps')).to.eq('fox');
  });
  it("shortestWord('do what you enjoy') returns do", function () {
    expect(shortestWord('do what you enjoy')).to.eq('do');
  });
});
