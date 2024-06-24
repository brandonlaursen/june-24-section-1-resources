const chai = require("chai");
const expect = chai.expect;
const addTwoToEnd = require("../problems/01-add-two-to-end");

let arr = ['a', 'b']
let arrCopy = arr;
let arr2 = [1, 2]
let arr2Copy = arr2
let letterArray = addTwoToEnd(arr, 'c', 'd')
let numArray = addTwoToEnd(arr2, 5, 6);
describe("add-two-to-end", function(){
    it('Should add last two letters to the end of the array', function(){
        expect(addTwoToEnd(['a', 'b'], 'c', 'd')).to.deep.equal(['a', 'b', 'c', 'd'])
    });

    it('Should return the original array mutated', function(){
        expect(arrCopy).to.equal(letterArray)
    })
})

describe("add-two-to-end", function(){
    it('Should add last two numbers to the end of the array', function(){
        expect(addTwoToEnd([1, 2], 5, 6)).to.deep.equal([1, 2, 5, 6])
    });

    it('Should return the original array mutated', function(){
        expect(arr2Copy).to.equal(numArray)
    })
})
