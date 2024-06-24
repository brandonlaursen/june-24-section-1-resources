const chai = require("chai");
const expect = chai.expect;
const doubler = require("../problems/05-doubler");

const arr = [1, 2, 3, 4];
const copy = arr;
const numArr = doubler(arr);

describe("doubler", function(){
    it("Should return the array with every value multiplied by 2.", function(){
        expect(doubler([1, 2, 3, 4])).to.have.deep.members([2, 4, 6, 8])
    });
    it("Should not return a new array but instead return the original array mutated.", function(){
        expect(copy).to.equal(numArr);
    })
})