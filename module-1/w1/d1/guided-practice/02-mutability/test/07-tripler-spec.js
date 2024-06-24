const chai = require("chai");
const expect = chai.expect;
const tripler = require("../problems/07-tripler");

describe("tripler", function(){
    it("Should return a new array where every value is tripled.", function(){
        expect(tripler([2, 7, 4])).to.have.deep.members([6, 21, 12])
    })
    it("Should triple every value in the array", function(){
        expect(tripler([-5, 10, 0, 11])).to.have.deep.members([ -15, 30, 0, 33 ])
    })
})