const chai = require("chai");
const expect = chai.expect;
const lastIndex = require("../problems/06-last-index");

describe("Last index", function(){
    it("Should return the last index where the character can be found.", function(){
        expect(lastIndex(["a", "b", "c", "a"], "a")).to.eql(3)
    })
    it("Should return -1 if the character cannot be found in the array.", function(){
        expect(lastIndex(["a", "b", "c", "a"], "z")).to.eql(-1)
    })
})
