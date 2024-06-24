const chai = require("chai");
const expect = chai.expect;
const range = require("../problems/02-range");

describe("range", function(){
    it("Should return an array containing an inclusive range of numbers from min to max", function(){
        expect(range(3, 10)).to.have.deep.members([3, 4, 5, 6, 7, 8, 9, 10]);
    });
    it("Should return an empty array if min is greater than max", function(){
        expect(range(10, 3)).to.eql([])
    })
})
