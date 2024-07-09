const chai = require("chai");
const expect = chai.expect;
const { color, type, lights } = require("../problems/02-object-destructuring");

describe("02-object-destructuring.js", function() {
  // console.log('==2===>', color, type, lights);
  it("color evaluates to 'green'", function () {
    expect(color).to.eq('green');
  });
  it("type evaluates to 'party'", function () {
    expect(type).to.eq('party');
  });
  it("lights evaluates to 'dark'", function () {
    expect(lights).to.eql('dark');
  });
});
