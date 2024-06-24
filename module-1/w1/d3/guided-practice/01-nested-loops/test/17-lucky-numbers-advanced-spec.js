const chai = require("chai");
const expect = chai.expect;
const luckyNumbers = require("../problems/17-lucky-numbers-advanced");

describe("luckyNumbers", function () {
    it(`luckyNumbers([
        [5, 9, 21],
        [9, 19, 6],
        [12, 14, 15]
    ]) returns [12]`, function () {
        expect(luckyNumbers([
            [ 5,  9, 21],
            [ 9, 19,  6],
            [12, 14, 15]
        ])).to.eql([12]);
    });
    it(`luckyNumbers([
        [ 5, 10,  8,  6],
        [10,  2,  7,  9],
        [21, 15, 19, 10]
    ]) returns [10]`, function () {
        expect(luckyNumbers([
            [ 5, 10,  8,  6],
            [10,  2,  7,  9],
            [21, 15, 19, 10]
        ])).to.eql([10]);
    });
});
