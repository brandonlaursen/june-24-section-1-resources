const chai = require("chai");
const expect = chai.expect;
const { hasThreeVowels } = require("../problems/13-has-three-vowels");

describe("hasThreeVowels", function () {
  it("hasThreeVowels('delicious') returns true", function () {
    expect(hasThreeVowels("delicious")).to.eq(true);
  });
  it("hasThreeVowels('bootcamp prep') returns true", function () {
    expect(hasThreeVowels("bootcamp prep")).to.eq(true);
  });
  it("hasThreeVowels('bootcamp') returns true", function () {
    expect(hasThreeVowels("bootcamp")).to.eq(true);
  });
  it("hasThreeVowels('dog') returns false", function () {
    expect(hasThreeVowels("dog")).to.eq(false);
  });
  it("hasThreeVowels('go back') returns false", function () {
    expect(hasThreeVowels("go back")).to.eq(false);
  });
});
