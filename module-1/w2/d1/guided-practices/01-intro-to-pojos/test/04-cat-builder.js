const chai = require("chai");
const expect = chai.expect;
const catBuilder = require("../problems/04-cat-builder");

describe("05-cat-builder.js", function() {
  it("catBuilder(\"Nyan\", \"rainbow\", [\"poptarts\"]) evaluates to { name: \"Nyan\", color: \"rainbow\", toys: [ \"poptarts\" ] }", function () {
    expect(catBuilder("Nyan", "rainbow", ["poptarts"])).to.eql({
      name: 'Nyan',
      color: 'rainbow',
      toys: ["poptarts"]
    });
  });
});
