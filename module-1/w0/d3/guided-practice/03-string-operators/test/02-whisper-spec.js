const chai = require("chai");
const expect = chai.expect;
const whisper = require("../problems/02-whisper");

describe("whisper", function () {
  it("whisper('Hey Buddy') returns '...hey buddy...'", function () {
    const result = whisper("Hey Buddy");
    expect(result).to.eql("...hey buddy...");
  });
  it("whisper('YEA! that was FUN') returns '...yea! that was fun...", function () {
    const result = whisper("YEA! that was FUN");
    expect(result).to.eql("...yea! that was fun...");
  });
});
