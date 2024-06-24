const chai = require("chai");
const expect = chai.expect;
const rotate = require("../problems/26-rotate");

let arr = ['a', 'b', 'c', 'd', 'e'];
let copy = arr;
let rotateRight = rotate(arr, 2);
describe("rotate right", function(){
    it("Should return a mutated array where elements are shifted right if num is positive.", function(){
        expect(rotate(['a', 'b', 'c', 'd', 'e'], 2)).to.have.deep.members([ 'd', 'e', 'a', 'b', 'c' ])
    })
    it("Should return the array mutated, not a new array.", function(){
        expect(copy).to.equal(rotateRight)
    })
});

let animals = ['wombat', 'koala', 'opossum', 'kangaroo']
let animalCopy = animals;
let rotateLeft = rotate(animals, -1)
describe("rotate left", function(){
    it("Should return a mutated array where elements are shifted left if num is negative.", function(){
        expect(rotate(['wombat', 'koala', 'opossum', 'kangaroo'], -1)).to.have.deep.members([ 'koala', 'opossum', 'kangaroo', 'wombat' ])
    })
    it("Should return the array mutated, not a new array.", function(){
        expect(animalCopy).to.equal(rotateLeft)
    })
})