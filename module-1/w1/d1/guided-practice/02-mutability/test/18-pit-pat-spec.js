const chai = require("chai");
const expect = chai.expect;
const pitPat = require("../problems/18-pit-pat");

describe("pit Pat", function(){
    it("Should return an array with values divisible by 4 or 6 but not both inclusive of max.", function(){
        expect(pitPat(18)).to.have.deep.members([ 4, 6, 8, 16, 18 ])
    })
    it("Should return an array with values divisible by 4 or 6 but not both inclusive of max.", function(){
        expect(pitPat(30)).to.have.deep.members([ 4, 6, 8, 16, 18, 20, 28, 30 ])
    })
})