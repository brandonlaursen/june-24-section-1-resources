const chai = require("chai");
const expect = chai.expect;
const commonFactors = require("../problems/19-common-factors");

describe("common Factors", function(){
    it("Should return an array with positive numbers that are able to divide both numbers.", function(){
        expect(commonFactors(12, 24)).to.have.deep.members([1, 2, 3, 4, 6, 12])
    })
    it("Should return an array with positive numbers that are able to divide both numbers.", function(){
        expect(commonFactors(7, 9)).to.have.deep.members([1])
    })
})
