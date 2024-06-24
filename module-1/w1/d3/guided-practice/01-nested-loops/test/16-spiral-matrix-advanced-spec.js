const chai = require("chai");
const expect = chai.expect;
const spiralOrder = require("../problems/16-spiral-matrix-advanced");

describe("spiralOrder", function () {
    it(`spiralOrder([
        [ 1, 2, 3],
        [ 4, 5, 6],
        [ 7, 8, 9]
    ]) returns [1,2,3,6,9,8,7,4,5]`, function () {
        expect(spiralOrder([
            [ 1, 2, 3],
            [ 4, 5, 6],
            [ 7, 8, 9]
        ])).to.eql([1,2,3,6,9,8,7,4,5]);
    });
    it(`spiralOrder([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9,10,11,12]
    ]) returns [1,2,3,4,8,12,11,10,9,5,6,7]`, function () {
        expect(spiralOrder([
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9,10,11,12]
        ])).to.eql([1,2,3,4,8,12,11,10,9,5,6,7]);
    });
});
