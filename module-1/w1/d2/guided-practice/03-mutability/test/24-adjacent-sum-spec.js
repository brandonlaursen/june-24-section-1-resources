const chai = require("chai");
const expect = chai.expect;
const adjacentSum = require("../problems/24-adjacent-sum");

describe("adjacent Sum", function(){
    it("Should return an array with the sums of the adjacent numbers from the original array.", function(){
        expect(adjacentSum([3, 7, 2, 11])).to.have.deep.members([10, 9, 13])
    })
    it("Should return an array with the sums of the adjacent numbers from the original array.", function(){
        expect(adjacentSum([2, 5, 1, 9, 2, 4])).to.have.deep.members([7, 6, 10, 11, 6])
    })
})
