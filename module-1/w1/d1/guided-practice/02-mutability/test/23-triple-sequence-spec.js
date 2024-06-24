const chai = require("chai");
const expect = chai.expect;
const tripleSequence = require("../problems/23-triple-sequence");

describe("triple Sequence", function(){
    it("Should return an array that is length elements long and who's values are the result of multiplying the previous element by 3.", function(){
        expect(tripleSequence(2, 4)).to.have.deep.members([2, 6, 18, 54])
    })
    it("Should return an array that is length elements long and who's values are the result of multiplying the previous element by 3.", function(){
        expect(tripleSequence(4, 5)).to.have.deep.members([4, 12, 36, 108, 324])
    })
})