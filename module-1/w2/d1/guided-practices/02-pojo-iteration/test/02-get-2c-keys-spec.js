const chai = require("chai");
const expect = chai.expect;
const get2CKeys = require("../problems/02-get-2c-keys");

describe("get2CKeys", function() {
  it("get2CKeys({ red: 'circle', blue: 'octagon', green: 'square' }) evaluates to ['red']", function () {
    expect(get2CKeys({
      red: 'circle',
      blue: 'octagon',
      green: 'square'
    })).to.have.members([
      'red'
    ]);
  });
});
