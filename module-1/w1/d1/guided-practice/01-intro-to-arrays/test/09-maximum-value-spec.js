const chai = require("chai");
const expect = chai.expect;
const maxVal = require("../problems/09-maximum-value");

describe("Minimum value", function(){
    it("Should return the largest number in the array.", function(){
        expect(maxVal([4, 6, 3, 5, 42, 4])).to.eql(42);
    });
    it("Should return null if the array is empty.", function(){
        expect(maxVal([])).to.eql(null);
    });
})