const chai = require("chai");
const expect = chai.expect;
const oddRange = require("../problems/04-odd-range")

describe("odd Range", function(){
    it("Should return an array containing all odd numbers up to the number parameter inclusive.", function(){
        expect(oddRange(13)).to.have.deep.members([1, 3, 5, 7, 9, 11, 13]);
    })
})