const chai = require("chai");
const expect = chai.expect;
const alternatingWords = require("../problems/10-alternating-words");

const arr =  [ 'Belka', 'STRELKA', 'laika', 'DEZIK' ];
const copy = arr;
const wordArr = alternatingWords(arr);

describe("alternating Words", function(){
    it("Should return the array with alternating words uppercased and lowercased.  The first word should be uppercased.", function(){
        expect(alternatingWords([ 'Belka', 'STRELKA', 'laika', 'DEZIK' ])).to.have.deep.members(['BELKA', 'strelka', 'LAIKA', 'dezik'])
    })
    it("Should return the original array mutated.", function(){
        expect(copy).to.equal(wordArr);
    })
})
