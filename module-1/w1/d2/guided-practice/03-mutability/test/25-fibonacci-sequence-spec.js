const chai = require("chai");
const expect = chai.expect;
const fibSequence = require("../problems/25-fibonacci-sequence");

describe("fib Sequence", function(){
    it("Should return an array that contains a sequence of numbers achieved by adding the previous two indices together.", function(){
        expect(fibSequence(5)).to.have.deep.members([ 1, 1, 2, 3, 5 ]);
    });
    it("Should return an array that contains a sequence of numbers achieved by adding the previous two indices together.", function(){
        expect(fibSequence(8)).to.have.deep.members([ 1, 1, 2, 3, 5, 8, 13, 21 ]);
    });
    it("Should return an empty array if the provided number is 0.", function(){
        expect(fibSequence(0)).to.eql([]);
    });
})
