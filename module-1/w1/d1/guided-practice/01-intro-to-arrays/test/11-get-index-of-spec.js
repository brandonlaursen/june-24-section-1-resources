const chai = require("chai");
const expect = chai.expect;
const getIndex = require("../problems/11-get-index-of");

describe("Get index of", function(){
    it("Should return the index of the array that matches the target value.", function(){
        expect(getIndex(['a', 'b', 'c', 'e'], 'c')).to.eql(2);
    })
    it("Should return -1 if the target is not found in the array.", function(){
        expect(getIndex([43, -7, 11, 13], 1)).to.eql(-1);
    })
})
