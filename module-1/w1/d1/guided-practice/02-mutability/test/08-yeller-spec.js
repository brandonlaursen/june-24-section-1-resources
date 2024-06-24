const chai = require("chai");
const expect = chai.expect;
const yeller = require("../problems/08-yeller");

describe("yeller", function(){
    it("Should return an array where each element is yelled", function(){
        expect(yeller(['hello', 'world'])).to.have.deep.members([ 'HELLO!', 'WORLD!' ])
    })
    it("Should return an array where each element is yelled", function(){
        expect(yeller(['kiwi', 'orange', 'mango'])).to.have.deep.members(['KIWI!', 'ORANGE!', 'MANGO!'])
    })
})