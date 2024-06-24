const chai = require("chai");
const expect = chai.expect;
const product = require("../problems/04-product-array");

describe("Product", function(){
    it("Should return the total product of multiplying all the numbers in the array.", function(){
        expect(product([10, 3, 5, 2])).to.eql(300);
    });
});
