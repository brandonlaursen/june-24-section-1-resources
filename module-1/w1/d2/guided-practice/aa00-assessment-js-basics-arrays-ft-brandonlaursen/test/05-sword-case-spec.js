require("./setup-tests");
const chai = require("chai");
const expect = chai.expect;

let swordCase;
try {
  swordCase = require("../problems/05-sword-case");
} catch {}

describe("05 - swordCase", () => {
  describe("should return the input string lowercased and dashes in replace of the spaces", () => {
    it("swordCase('Turn into Sword-Case') should return 'turn-into-sword-case'", () => {
      expect(swordCase("Turn into Sword-Case")).to.eq("turn-into-sword-case");
    });
    it("swordCase('REVERSE  WORD') should return 'reverse--word'", () => {
      expect(swordCase("REVERSE  WORD")).to.eq("reverse--word");
    });
    it("swordCase(' I'll be there ') should return '-i'll-be-there-'", () => {
      expect(swordCase(" I'll be there ")).to.eq("-i'll-be-there-");
    });
  });
});
