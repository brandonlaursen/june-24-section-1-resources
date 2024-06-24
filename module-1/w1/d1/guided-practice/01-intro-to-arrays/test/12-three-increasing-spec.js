const chai = require("chai");
const expect = chai.expect;
const threeIncrease = require("../problems/12-three-increasing");

describe("Three increasing", function(){
    it("Should return true if the array contains three consecutive numbers in consecutive increasing order.", function(){
        expect(threeIncrease([2, 7, 8, 9])).to.eql(true);
    })
    it("Should return false if three consecutive numbers are not in the array.", function(){
        expect(threeIncrease([7, 2, 4, 5, 2, 1, 6])).to.eql(false);
    })
})

