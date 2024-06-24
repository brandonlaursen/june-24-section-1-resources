const chai = require("chai");
const expect = chai.expect;
const sumArray = require("../problems/03-sum-array");

describe("Sum array", function(){
    it("Should return the total sum of all the numbers in the array.", function(){
        expect(sumArray([5, 6, 4])).to.eql(15)
    })
    it("Should return 0 if the array is empty.", function(){
        expect(sumArray([])).to.eql(0)
    })
})
