const chai = require("chai");
const expect = chai.expect;
const { repeatingTranslate } = require("../problems/09-repeating-translate");

describe("repeatingTranslate", function () {
  it("repeatingTranslate('we like to go running fast') returns 'we likelike to go runninging fastast'", function () {
    expect(repeatingTranslate("we like to go running fast")).to.eq(
      "we likelike to go runninging fastast"
    );
  });
  it("repeatingTranslate('he cannot find the trash') returns 'he cannotot findind thethe trashash'", function () {
    expect(repeatingTranslate("he cannot find the trash")).to.eq(
      "he cannotot findind thethe trashash"
    );
  });
  it("repeatingTranslate('pasta is my favorite dish') returns 'pastapasta is my favoritefavorite dishish'", function () {
    expect(repeatingTranslate("pasta is my favorite dish")).to.eq(
      "pastapasta is my favoritefavorite dishish"
    );
  });
  it("repeatingTranslate('her family flew to France') returns 'herer familyily flewew to FranceFrance'", function () {
    expect(repeatingTranslate("her family flew to France")).to.eq(
      "herer familyily flewew to FranceFrance"
    );
  });
  it("repeatingTranslate('did he ever find the trash') returns 'didid he everer findind thethe trashash'", function () {
    expect(repeatingTranslate("did he ever find the trash")).to.eq(
      "didid he everer findind thethe trashash"
    );
  });
});
