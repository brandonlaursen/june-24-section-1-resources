const chai = require("chai");
const expect = chai.expect;
const removeElements = require("../problems/12-remove-element");

describe("remove Elements", function(){
    it("Should remove (x) amount of elements from the array at the provided start index.", function(){
        expect(removeElements([1, 2, 3], 1, 1)).to.have.deep.members([1, 3])
    })
    it("Should return an empty array if the start number is greater than the length of the array or negative", function(){
        expect(removeElements([1, 2, 3], -1, 1)).to.eql([])
    })
})