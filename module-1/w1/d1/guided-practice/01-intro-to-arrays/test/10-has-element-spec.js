const chai = require("chai");
const expect = chai.expect;
const hasElement = require("../problems/10-has-element");

describe("Has element", function(){
    it("Should return true if the target is found in the array.", function(){
        expect(hasElement(['a', 'b', 'c', 'e'], 'c')).to.eql(true);
    })
    it("Should return false if the target is NOT found in the array.", function(){
        expect(hasElement([43, -7, 11, 13], 1)).to.eql(false);
    })
})
