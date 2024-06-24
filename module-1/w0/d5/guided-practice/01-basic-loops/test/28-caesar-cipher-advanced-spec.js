const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const caesarCipher = require("../problems/28-caesar-cipher-advanced");

describe("caesarCipher", function() {
  it('caesarCipher("apple", 1) returns bqqmf', function () {
    expect(caesarCipher("apple", 1)).to.eq("bqqmf");
  });
  it('caesarCipher("bootcamp", 2) returns dqqvecor', function () {
    expect(caesarCipher("bootcamp", 2)).to.eq("dqqvecor");
  });
  it('caesarCipher("zebra", 4) returns difve', function () {
    expect(caesarCipher("zebra", 4)).to.eq("difve");
  });
});
