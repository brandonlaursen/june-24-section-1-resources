const chai = require("chai");
const expect = chai.expect;
const fizzBuzz = require("../problems/14-fizz-buzz-array");

describe("fizz Buzz", function(){
    it("Should return an array with all numbers divisible by 3 or 5 but not both up to the number provided.", function(){
        expect(fizzBuzz(12)).to.have.deep.members([ 3, 5, 6, 9, 10 ])
    })
    it("Should return an array with all numbers divisible by 3 or 5 but not both up to the number provided.", function(){
        expect(fizzBuzz(20)).to.have.deep.members([ 3, 5, 6, 9, 10, 12, 18 ])
    })
})
