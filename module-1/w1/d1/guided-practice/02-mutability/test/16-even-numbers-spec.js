const chai = require("chai");
const expect = chai.expect;
const evenNumbers = require("../problems/16-even-numbers");

describe("even Numbers", function(){
    it("Should return an array with all even numbers up to max exclusive.", function(){
        expect(evenNumbers(7)).to.have.deep.members([ 2, 4, 6 ])
    })
    it("Should return an array with all even numbers up to max exclusive.", function(){
        expect(evenNumbers(12)).to.have.deep.members([ 2, 4, 6, 8, 10])
    })
    it("Should return an array with all even numbers up to max exclusive.", function(){
        expect(evenNumbers(15)).to.have.deep.members([2, 4, 6, 8, 10, 12, 14])
    })
})