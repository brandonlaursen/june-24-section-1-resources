const chai = require("chai");
const expect = chai.expect;
const mirror = require("../problems/09-mirror");

const arr = [1, 2, 3];
let copy = arr;
let changed = mirror(arr);

describe("mirror", function(){
    it("Should return a new array where the original array is added twice with the second set in reverse order.", function(){
        expect(mirror([1,2,3])).to.have.deep.members([ 1, 2, 3, 3, 2, 1 ])
    })
    it("Should return a new array, not the original array mutated.", function(){
        expect(mirror(copy)).to.not.equal(changed);
    })
})