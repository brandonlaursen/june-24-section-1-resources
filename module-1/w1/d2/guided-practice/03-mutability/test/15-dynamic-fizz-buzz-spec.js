const chai = require("chai");
const expect = chai.expect;
const dynamicFizzBuzz = require("../problems/15-dynamic-fizz-buzz");

describe("dynamic Fizz Buzz", function(){
    it("Should return all numbers in an array, divisible by num1 and num2 but not both up to max.", function(){
        expect(dynamicFizzBuzz(20, 3, 5)).to.have.deep.members([  3, 5, 6, 9, 10, 12, 18])
    })
    it("Should return all numbers in an array, divisible by num1 and num2 but not both up to max.", function(){
        expect(dynamicFizzBuzz(24, 4, 6)).to.have.deep.members([ 4, 6, 8, 16, 18, 20  ])
    })
})