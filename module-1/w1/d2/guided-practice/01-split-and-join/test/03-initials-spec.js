const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const initials = require("../problems/03-initials");

describe("initials", function() {
  it("initials('anna paschall') returns AP", function () {
    expect(initials('anna paschall')).to.eq('AP');
  });
  it("initials('Mary La Grange') returns MLG", function () {
    expect(initials('Mary La Grange')).to.eq('MLG');
  });
  it("initials('brian crawford scott') returns BCS", function () {
    expect(initials('brian crawford scott')).to.eq('BCS');
  });
  it("initials('Benicio Monserrate Rafael del Toro Sánchez') returns BMRDTS", function () {
    expect(initials('Benicio Monserrate Rafael del Toro Sánchez')).to.eq('BMRDTS');
  });
});
