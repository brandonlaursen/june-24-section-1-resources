const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const moreDotLessDash = require("../problems/26-more-dot-less-dash");

describe("moreDotLessDash", function () {
    it('moreDotLessDash("2-D arrays are fun. I think.") returns true', function () {
        expect(moreDotLessDash("2-D arrays are fun. I think.")).to.be.true;
    });
    it('moreDotLessDash("Morse code is great.") returns true', function () {
        expect(moreDotLessDash("Morse code is great.")).to.be.true;
    });
    it('moreDotLessDash(".... . -.--") returns true', function () {
        expect(moreDotLessDash(".... . -.--")).to.be.true;
    });
    it('moreDotLessDash(".--. .-. --- --. .-. .- -- -- . .-.") returns false', function () {
        expect(moreDotLessDash(".--. .-. --- --. .-. .- -- -- . .-.")).to.be.false;
    });
    it('moreDotLessDash("high-flying acrobat.") returns false', function () {
        expect(moreDotLessDash("high-flying acrobat.")).to.be.false;
    });
});
