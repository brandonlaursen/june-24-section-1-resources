const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const vowelCipher = require("../problems/27-vowel-cipher-advanced");

describe("vowelCipher", function () {
    it('vowelCipher("bootcamp") returns buutcemp', function () {
        expect(vowelCipher("bootcamp")).to.eq("buutcemp");
    });
    it('vowelCipher("paper cup") returns pepir cap', function () {
        expect(vowelCipher("paper cup")).to.eq("pepir cap");
    });
});
