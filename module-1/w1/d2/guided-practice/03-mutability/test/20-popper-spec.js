const chai = require("chai");
const expect = chai.expect;
const popper = require("../problems/20-popper");

const arr = ['a', 'b', 'c', 'd', 'e']
const copy = arr;
popper(arr, 2);

describe("popper", function(){
    it("Should return a new array with the removed elements from the original array.", function(){
        expect(popper(['a', 'b', 'c', 'd', 'e'], 2)).to.have.deep.members([ 'e', 'd' ])
    })
    it("Should mutate the original array.", function(){
        expect(arr).to.equal(copy);
    })
})