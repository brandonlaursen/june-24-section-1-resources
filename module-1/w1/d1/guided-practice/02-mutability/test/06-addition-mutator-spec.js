const chai = require("chai");
const expect = chai.expect;
const additionMutator = require("../problems/06-addition-mutator");

let nums1 = [3, 7, 1, 2];
let num2 = nums1
let savedVal = additionMutator(nums1, 4);

describe("addition Mutator", function(){
    it("Should change each value in the array by adding the number argument to it.", function(){
        expect(additionMutator([3, 7, 1, 2], 4)).to.have.deep.members([ 7, 11, 5, 6])
    });
    it("Should not return a new array but instead mutate the original array.", function(){
        expect(num2).to.equal(savedVal)
    })
})