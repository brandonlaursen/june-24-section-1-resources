const chai = require("chai");
const expect = chai.expect;
const chooseyEndings = require("../problems/21-choosey-endings");

const arr = ['family', 'hound', 'catalyst','fly', 'timidly', 'bond'];

describe("choosey Endings", function(){
    it("Should return a new array with the words that end with the provided suffix.", function(){
        expect(chooseyEndings(arr, 'ly')).to.have.deep.members([ 'family', 'fly', 'timidly' ])
    })
    it("Should return a new array with the words that end with the provided suffix.", function(){
        expect(chooseyEndings(arr, 'nd')).to.have.deep.members([ 'hound', 'bond' ])
    })
    it("Should return an empty array if the passed argument is not an array.", function(){
        expect(chooseyEndings(17, 'ily')).to.eql([])
    })
})
