require("./setup-tests");
const chai = require("chai");
const expect = chai.expect;
const startsWith = require("../problems/05-problem-solving-pt2");

describe("05 - Problem Solving Part 2", () => {
  describe("startsWith", () => {
    describe("should be a function that returns true if the first argument starts with the substring given as the second argument", () => {
      it("if the first argument is 'racecar' and the second argument is 'race', then it should return true", () => {
        expect(startsWith("racecar", "race")).to.be.true;
      });
      it("if the first argument is 'racecar' and the second argument is 'rc', then it should return false", () => {
        expect(startsWith("racecar", "rc")).to.be.false;
      });
      it("if the first argument is 'clean' and the second argument is 'clean', then it should return true", () => {
        expect(startsWith("clean", "clean")).to.be.true;
      });
      it("if the first argument is 'Grow' and the second argument is 'g', then it should return false", () => {
        expect(startsWith("Grow", "g")).to.be.false;
      });
    });
  });
});
