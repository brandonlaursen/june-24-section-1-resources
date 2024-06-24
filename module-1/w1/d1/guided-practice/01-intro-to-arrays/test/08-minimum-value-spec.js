const chai = require("chai");
const expect = chai.expect;
const minVal = require("../problems/08-minimum-value");

describe("Minimum value", function(){
    it("Should return the smallest number in the array.", function(){
        expect(minVal([4, 6, 3, 5, 2, 4])).to.eql(2);
    });
    it("Should return null if the array is empty.", function(){
        expect(minVal([])).to.eql(null);
    });
})
