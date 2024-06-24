const chai = require("chai");
const expect = chai.expect;
const pascalsTriangle = require("../problems/19-pascals-triangle-advanced");

describe("pascalsTriangle", function () {
    it(`pascalsTriangle(5) returns [
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1]
    ]`, function () {
        expect(pascalsTriangle(5)).to.eql([
            [1],
            [1, 1],
            [1, 2, 1],
            [1, 3, 3, 1],
            [1, 4, 6, 4, 1]
        ]);
    });
    it(`pascalsTriangle(7) returns [
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
    [1, 5, 10, 10, 5, 1],
    [1, 6, 15, 20, 15, 6, 1]
]`, function () {
        expect(pascalsTriangle(7)).to.eql([
            [1],
            [1, 1],
            [1, 2, 1],
            [1, 3, 3, 1],
            [1, 4, 6, 4, 1],
            [1, 5, 10, 10, 5, 1],
            [1, 6, 15, 20, 15, 6, 1]
        ]);
    });
    it(`pascalsTriangle(-1) returns []`, function () {
        expect(pascalsTriangle(-1)).to.eql([]);
    });
});
