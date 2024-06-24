const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const tripletTrue = require("../problems/25-triplet-true");

describe("tripletTrue", function () {
    it('tripletTrue("caaabb") returns true', function () {
        expect(tripletTrue("caaabb")).to.be.true;
    });
    it('doubleLetterCount("terrrrrible") returns true', function () {
        expect(tripletTrue("terrrrrible")).to.be.true;
    });
    it('doubleLetterCount("runninggg") returns true', function () {
        expect(tripletTrue("runninggg")).to.be.true;
    });
    it('doubleLetterCount("bootcamp") returns false', function () {
        expect(tripletTrue("bootcamp")).to.be.false;
    });
    it('doubleLetterCount("e") returns false', function () {
        expect(tripletTrue("e")).to.be.false;
    });
});
