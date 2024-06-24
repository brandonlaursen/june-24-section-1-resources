const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const reverseSentence = require("../problems/01-reverse-sentence");

describe("reverseSentence", function() {
  it("reverseSentence('I am pretty hungry') returns hungry pretty am I", function () {
    expect(reverseSentence('I am pretty hungry')).to.eq('hungry pretty am I');
  });
  it("reverseSentence('follow the yellow brick road') returns road brick yellow the follow", function () {
    expect(reverseSentence('follow the yellow brick road')).to.eq('road brick yellow the follow');
  });
});
