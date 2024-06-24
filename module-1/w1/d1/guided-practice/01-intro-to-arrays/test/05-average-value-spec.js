const chai = require("chai");
const expect = chai.expect;
const avgVal = require("../problems/05-average-value");

describe("Average value", function(){
    it("Should return the average of all values in the array.", function(){
        expect(avgVal([3, 7, 2, 1, 2])).to.eql(3)
    })
    it("Should return null if the array is empty.", function(){
        expect(avgVal([])).to.eql(null);
    })
})
