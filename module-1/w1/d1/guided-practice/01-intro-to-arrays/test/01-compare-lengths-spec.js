const chai = require("chai");
const expect = chai.expect;
const compare = require("../problems/01-compare-lengths");

let a1 = ['a', 'b', 'c'];
let a2 = ['w', 'x', 'y'];
let a3 = [1, 3, 7, 4];

describe("compare lengths", function(){
    it("Should return false if the provided arrays are equal in length.", function(){
        expect(compare(a1, a2)).to.eql(false)
    })
    it("Should return true if the provided arrays are NOT equal in length.", function(){
        expect(compare(a1, a3)).to.eql(true)
    })
})