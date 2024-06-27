require("./setup-tests");
const chai = require("chai");
const expect = chai.expect;
const magicNumber = require("../problems/04-problem-solving-pt1");

describe("04 - Problem Solving Part 1", () => {
  describe("magicNumber", () => {
    describe("should be a function that returns the magic number in the formula", () => {
      it("if numGames = 162, numWins1stPlace = 72, and numLosses2ndPlace = 50, then it should return 41", () => {
        expect(magicNumber(162, 72, 50)).to.eq(41);
      });
      it("if numGames = 50, numWins1stPlace = 28, and numLosses2ndPlace = 19, then it should return 4", () => {
        expect(magicNumber(50, 28, 19)).to.eq(4);
      });
    });
  });
});
