const chai = require("chai");
const expect = chai.expect;
const doubleSequence = require("../problems/22-double-sequence");

describe("double Sequence", function(){
    it("Should return an array that is length elements long and who's values are the result of multiplying the previous element by 2.", function(){
        expect(doubleSequence(3, 5)).to.have.deep.members([3, 6, 12, 24, 48])
    })
    it("Should return an array that is length elements long and who's values are the result of multiplying the previous element by 2.", function(){
        expect(doubleSequence(5, 4)).to.have.deep.members([5, 10, 20, 40])
    })
    it("Should return an empty array if length is less than 1.", function(){
        expect(doubleSequence(5, 0)).to.eql([]);
    })
})