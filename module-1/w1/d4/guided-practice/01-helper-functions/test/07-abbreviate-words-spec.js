const chai = require("chai");
const expect = chai.expect;
const {  abbreviateWords } = require("../problems/07-abbreviate-words");

describe("abbreviateWords", function () {
  it("abbreviateWords('what a wonderful place to live') returns 'what a wndrfl plc to live'", function () {
    expect(abbreviateWords("what a wonderful place to live")).to.eq(
      "what a wndrfl plc to live"
    );
  });
  it("abbreviateWords('she sends an excellent message') returns 'she snds an xcllnt mssg'", function () {
    expect(abbreviateWords("she sends an excellent message")).to.eq(
      "she snds an xcllnt mssg"
    );
  });
  it("abbreviateWords('keep going youre doing great') returns 'keep gng yr dng grt'", function () {
    expect(abbreviateWords("keep going youre doing great")).to.eq(
      "keep gng yr dng grt"
    );
  });
  it("abbreviateWords('dont stop wont stop') returns 'dont stop wont stop'", function () {
    expect(abbreviateWords("dont stop wont stop")).to.eq("dont stop wont stop");
  });
  it("abbreviateWords('youre getting good at this') returns 'yr gttng good at this'", function () {
    expect(abbreviateWords("youre getting good at this")).to.eq(
      "yr gttng good at this"
    );
  });
});
