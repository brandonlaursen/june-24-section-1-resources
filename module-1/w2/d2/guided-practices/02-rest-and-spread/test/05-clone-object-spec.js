const chai = require("chai");
const expect = chai.expect;
const { obj, objClone, green } = require("../problems/05-clone-object");

describe("05-clone-object.js", function() {
  it("objClone evaluates to a copy of obj with 'yellow' key added and 'green' key removed", function() {
    expect(objClone).to.not.eq(obj);
    expect(objClone).to.eql({ red: "circle", blue: "square", yellow: "pentagon" });
  });
  it("green evaluates to 'hexagon'", function() {
    expect(green).to.eq('hexagon');
  });
});
