const chai = require("chai");
const expect = chai.expect;
const combine = require("../problems/07-combine-arrays");

describe("Combine arrays", function(){
    it("Should return the two arrays combined into one array.", function(){
        expect(combine([1, 2], [3, 4])).to.eql([1, 2, 3, 4])
    })
})
