const chai = require("chai");
const expect = chai.expect;
const pyramidArray = require("../problems/18-pyramid-array-advanced");

describe("pyramidArray", function () {
    it(`pyramidArray([2, 3, 7, 5, 9]) returns [
        [85],
        [37, 48],
        [15, 22, 26],
        [5, 10, 12, 14],
        [2, 3, 7, 5, 9]
    ]`, function () {
        expect(pyramidArray([2, 3, 7, 5, 9])).to.eql([
            [85],
            [37, 48],
            [15, 22, 26],
            [5, 10, 12, 14],
            [2, 3, 7, 5, 9]
        ]);
    });
    it(`pyramidArray([2, 2, 2, 2]) returns [
        [16],
        [8, 8],
        [4, 4, 4],
        [2, 2, 2, 2]
    ]`, function () {
        expect(pyramidArray([2, 2, 2, 2])).to.eql([
            [16],
            [8, 8],
            [4, 4, 4],
            [2, 2, 2, 2]
        ]);
    });
});
