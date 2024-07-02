require("./setup-tests");
const chai = require("chai");
const expect = chai.expect;

let fizzBuzzArr;
try {
  fizzBuzzArr = require("../problems/07-debugging");
} catch {}

const exec = require("child_process").execSync;

describe("07 - Debugging: fizzBuzzArr", () => {
  describe("should return the numbers in the input array as Fizz Buzz numbers", () => {
    it("fizzBuzzArr([3, 4, 5]) should return ['Fizz', 4, 'Buzz']", () => {
      expect(fizzBuzzArr([3, 4, 5])).to.eql(["Fizz", 4, "Buzz"]);
    });
    it("fizzBuzzArr([3, 4, 5, 6, 7, 8]) should return ['Fizz', 4, 'Buzz', 'Fizz', 7, 8]", () => {
      expect(fizzBuzzArr([3, 4, 5, 6, 7, 8])).to.eql([
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
      ]);
    });
    it("fizzBuzzArr([15, 16, 17, 18]) should return ['Fizzbuzz', 16, 17, 'Fizz']", () => {
      expect(fizzBuzzArr([15, 16, 17, 18])).to.eql([
        "Fizzbuzz",
        16,
        17,
        "Fizz",
      ]);
    });
    it("fizzBuzzArr([12, 13, 14, 15, 16, 17, 18]) should return ['Fizz', 13, 14, 'Fizzbuzz', 16, 17, 'Fizz']", () => {
      expect(fizzBuzzArr([12, 13, 14, 15, 16, 17, 18])).to.eql([
        "Fizz",
        13,
        14,
        "Fizzbuzz",
        16,
        17,
        "Fizz",
      ]);
    });
  });
});
