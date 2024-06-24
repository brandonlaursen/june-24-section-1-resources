const chai = require("chai");
const expect = chai.expect;
const selectElements = require("../problems/03-select-elements-in-range");

describe("select Elements In Range", function(){
    it("Should return an array of values between starting and ending index inclusive", function(){
        expect(selectElements([1,2,3], 0, 1)).to.have.deep.members([1, 2])
    })
})
