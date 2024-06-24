const chai = require("chai");
const expect = chai.expect;
const intersect = require("../problems/10-intersect");

let arr1 = ["a", "b", "c", "d"];
let arr2 = ["b", "d", "e"];

let arr3 = ["a", "b", "c"];
let arr4 = ["x", "y", "z"];

describe("intersect", function () {
  it("intersect(arr1,arr2) should return a new array", function () {
    expect(intersect(arr1, arr2)).to.be.an("array");
  });
  it("intersect(['a', 'b', 'c', 'd'],['b', 'd', 'e']) should return ['b', 'd']", function () {
    expect(intersect(arr1, arr2)).to.eql(["b", "d"]);
  });
  it("intersect(['a', 'b', 'c'],['x', 'y', 'z']) should return []", function () {
    expect(intersect(arr3, arr4)).to.eql([]);
  });
});
