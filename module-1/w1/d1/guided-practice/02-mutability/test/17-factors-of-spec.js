const chai = require("chai");
const expect = chai.expect;
const factorsOf = require("../problems/17-factors-of");

describe("factors Of", function(){
    it("Should return an array with all positive numbers able to divide into num with no remainder.", function(){
        expect(factorsOf(9)).to.have.deep.members([ 1, 3, 9 ])
    })
    it("Should return an array with all positive numbers able to divide into num with no remainder.", function(){
        expect(factorsOf(24)).to.have.deep.members([ 1, 2, 3, 4, 6, 8, 12, 24 ])
    })
    it("Should return an array with all positive numbers able to divide into num with no remainder.", function(){
        expect(factorsOf(2017)).to.have.deep.members([ 1, 2017 ])
    })
})