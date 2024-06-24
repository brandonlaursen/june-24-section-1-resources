const chai = require("chai");
const expect = chai.expect;
const lessThan = require("../problems/11-less-than-five");

const arr = [1, -5, 10, 6, 2];
const copy = arr;

describe("less Than", function(){
    it("Should return a new array with values less than 5.", function(){
        expect(lessThan([1, -5, 10, 6, 2])).to.have.deep.members([1, -5, 2])
    });
    it("Should return a new array, not the original mutated.", function(){
        expect(lessThan(arr)).to.not.equal(copy);
    })
})