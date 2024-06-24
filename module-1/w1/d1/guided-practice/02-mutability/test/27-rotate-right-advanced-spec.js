const chai = require("chai");
const expect = chai.expect;
const rotateRight = require("../problems/27-rotate-right");

let arr = ['a', 'b', 'c', 'd', 'e'];
let copy = arr
describe("Rotate Right", function(){
    it("Should return an array where elements are shifted right num times.", function(){
        expect(rotateRight(['a', 'b', 'c', 'd', 'e'], 2)).to.have.deep.members([ 'd', 'e', 'a', 'b', 'c' ])
    })
    it("Should return a new array and not the original array mutated.", function(){
        expect(rotateRight(arr)).to.not.equal(copy);
    })
})