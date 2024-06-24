const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;

describe("getVowelKeys", function() {
  let getVowelKeys;
  let spy;
  before(function () {
    spy = chai.spy.on(Object, 'keys');
    getVowelKeys = require("../problems/06-refactor-get-vowel-keys");
  });

  it("getVowelKeys({ hotel: 6, gym: 10, ATMs: 2, train: 20 }) evaluates to ['hotel', 'train']", function () {
    expect(getVowelKeys({
      hotel: 6,
      gym: 10,
      ATMs: 2,
      train: 20,
    })).to.have.deep.members([
      'hotel',
      'train'
    ]);
  });
  it("should not use Object.keys()", function () {
    expect(spy).not.to.have.been.called();
  });
});
