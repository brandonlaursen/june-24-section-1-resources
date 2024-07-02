require("./setup-tests");
const chai = require("chai");
const expect = chai.expect;

describe("09 - vowelsToNums", () => {
  describe("should return the input array of characters, but with the equivalent characters from the VOWELS array replaced with their index in the VOWELS array", () => {
    context("if VOWELS = ['a', 'e', 'i', 'o', 'u']", () => {
      it("vowelsToNums(['h','e','l','l','o']) should return ['h',1,'l','l',3]", () => {
        const vowelsToNums = formatFile(
          /VOWELS\s*=\s*.*/,
          `VOWELS = ["a", "e", "i", "o", "u"];`
        );
        expect(vowelsToNums(["h", "e", "l", "l", "o"])).to.eql([
          "h",
          1,
          "l",
          "l",
          3,
        ]);
      });
      it("vowelsToNums(['f','r','i','e','n','d','l','y']) should return ['f','r',2,1,'n','d','l','y']", () => {
        const vowelsToNums = formatFile(
          /VOWELS\s*=\s*.*/,
          `VOWELS = ["a", "e", "i", "o", "u"];`
        );
        expect(vowelsToNums(["f", "r", "i", "e", "n", "d", "l", "y"])).to.eql([
          "f",
          "r",
          2,
          1,
          "n",
          "d",
          "l",
          "y",
        ]);
      });
    });
    context("if VOWELS = ['y', 'u', 'o', 'i', 'e', 'a']", () => {
      it("vowelsToNums(['f','r','i','e','n','d','l','y']) should return ['f','r',3,4,'n','d','l',0]", () => {
        const vowelsToNums = formatFile(
          /VOWELS\s*=\s*.*/,
          `VOWELS = ["y", "u", "o", "i", "e", "a"];`
        );
        expect(vowelsToNums(["f", "r", "i", "e", "n", "d", "l", "y"])).to.eql([
          "f",
          "r",
          3,
          4,
          "n",
          "d",
          "l",
          0,
        ]);
      });
    });
  });

  describe("should mutate the original input array and return it", () => {
    it("vowelsToNums(['p', 'u', 'r', 'p', 'l', 'e'])", () => {
      const vowelsToNums = formatFile();
      let arr = ["p", "u", "r", "p", "l", "e"];
      expect(vowelsToNums(arr)).to.eq(arr);
    });
  });
});


const fs = require("fs");
const path = require("path");

function formatFile (...args) {
  if (!args.length) return require("../problems/09-vowels-to-nums");
  let file = fs.readFileSync(
    path.resolve(__dirname, "../problems/09-vowels-to-nums.js"),
    "utf-8"
  );
  let i = 0;
  while (i < args.length) {
    let [regex, replaceStr] = [args[i], args[i + 1]];
    file = file.replace(
      regex,
      replaceStr
    );
    i += 2;
  }
  const Module = module.constructor;
  const m = new Module();
  m._compile(file, "");
  return m.exports;
};
