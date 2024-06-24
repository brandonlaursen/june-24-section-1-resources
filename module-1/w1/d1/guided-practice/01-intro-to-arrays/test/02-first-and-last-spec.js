const chai = require("chai");
const expect = chai.expect;
const firstAndLast = require("../problems/02-first-and-last");

describe("First and last", function(){
    it("Should return the sum of the first and last elements of the array if the length is even.", function(){
        expect(firstAndLast([1, 2, 3, 4])).to.eql(5)
    })
    it("Should return the difference between the first and last elements of the array if the length is odd.", function(){
        expect(firstAndLast([1, 2, 3, 4, 5])).to.eql(-4)
    })
})