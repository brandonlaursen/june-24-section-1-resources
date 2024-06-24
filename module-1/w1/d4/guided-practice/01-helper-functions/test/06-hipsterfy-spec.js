const chai = require("chai");
const expect = chai.expect;
const { hipsterfy } = require("../problems/06-hipsterfy");

describe("hipsterfy", function () {
  it("hipsterfy('When should everyone wake up?') returns 'Whn shold everyon wak p?'", function () {
    expect(hipsterfy("When should everyone wake up?")).to.eq(
      "Whn shold everyon wak p?"
    );
  });
  it("hipsterfy('get ready for our bootcamp') returns 'gt redy fr or bootcmp'", function () {
    expect(hipsterfy("get ready for our bootcamp")).to.eq(
      "gt redy fr or bootcmp"
    );
  });
  it("hipsterfy('panthers are great animals') returns 'Whn shold everyon wak p?'", function () {
    expect(hipsterfy("panthers are great animals")).to.eq(
      "panthrs ar gret animls"
    );
  });
  it("hipsterfy('go big or go home') returns 'g bg r g hom'", function () {
    expect(hipsterfy("go big or go home")).to.eq("g bg r g hom");
  });
  it("hipsterfy('dont let your dreams be dreams') returns 'dnt lt yor drems b drems'", function () {
    expect(hipsterfy("dont let your dreams be dreams")).to.eq(
      "dnt lt yor drems b drems"
    );
  });
});
