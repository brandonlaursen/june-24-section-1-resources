
const chai = require("chai");
const expect = chai.expect;

const bothStringsIncluded = require("../problems/04-both-strings-included");

describe("bothStringsIncluded(sentence, str1, str2)", function () {
  it("bothStringsIncluded(sentence, str1, str2) returns true if BOTH strings are found within the sentence string", function () {
    expect(
      bothStringsIncluded(
        "my favorite fruits are apples and papaya",
        "apple",
        "papaya"
      )
    ).to.eq(true);
    expect(
      bothStringsIncluded(
        "my favorite least fruits are guava and papaya",
        "apple",
        "papaya"
      )
    ).to.eq(false);
  });
  it("bothStringsIncluded(sentence, str1, str2) returns false if only one string is in the sentence string", function () {
    expect(
      bothStringsIncluded(
        "my favorite least fruits are guava and papaya",
        "apple",
        "papaya"
      )
    ).to.eq(false);
  });
  it("bothStringsIncluded(sentence, str1, str2) returns false if neither str1 or str2 are in the sentence string", function () {
    expect(
      bothStringsIncluded(
        "My brothers are Chris and Steve",
        "Christian",
        "Steven"
      )
    ).to.eq(false);
  });
});
