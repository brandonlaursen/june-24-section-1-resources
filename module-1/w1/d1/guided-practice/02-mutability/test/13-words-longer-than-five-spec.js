const chai = require("chai");
const expect = chai.expect;
const wordsLonger = require("../problems/13-words-longer-than-five");

let arr = ['bike', 'skateboard','scooter', 'moped'];
let copy = arr;

describe("words longer than five", function(){
    it("Should return a new array where every element has a length greater than five.", function(){
        expect(wordsLonger(['bike', 'skateboard','scooter', 'moped'])).to.have.deep.members([ 'skateboard', 'scooter' ])
    });
    it("Should return a new array, not the original array mutated.", function(){
        expect(wordsLonger(arr)).to.not.equal(copy);
    })
})