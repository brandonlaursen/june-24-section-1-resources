require("./setup-tests");
const chai = require("chai");
const expect = chai.expect;
const obj = require("../problems/03-string-operators");

describe("03 - String Operators", () => {
  describe("shortHandStr", () => {
    describe("should be a function that returns the first and last letter of its argument uppercased", () => {
      it("shortHandStr('hello') should return 'HO'", () => {
        if (!("shortHandStr" in obj))
          throw new ReferenceError("shortHandStr is not defined");
        expect(obj.shortHandStr("hello")).to.eq("HO");
      });
      it("shortHandStr('App') should return 'AP'", () => {
        if (!("shortHandStr" in obj))
          throw new ReferenceError("shortHandStr is not defined");
        expect(obj.shortHandStr("App")).to.eq("AP");
      });
      it("shortHandStr('WORLD!') should return 'W!'", () => {
        if (!("shortHandStr" in obj))
          throw new ReferenceError("shortHandStr is not defined");
        expect(obj.shortHandStr("WORLD!")).to.eq("W!");
      });
    });
  });

  describe("makeFirstLowerCased", () => {
    describe("should be a function that returns the first argument where the first instance of the second argument in the first argument is lowercased", () => {
      it("makeFirstLowerCased('HELLO', 'L') should return 'HElLO'", () => {
        if (!("makeFirstLowerCased" in obj))
          throw new ReferenceError("makeFirstLowerCased is not defined");
        expect(obj.makeFirstLowerCased("HELLO", "L")).to.eq("HElLO");
      });
      it("makeFirstLowerCased('HeLLo', 'L') should return 'HelLo'", () => {
        if (!("makeFirstLowerCased" in obj))
          throw new ReferenceError("makeFirstLowerCased is not defined");
        expect(obj.makeFirstLowerCased("HeLLo", "L")).to.eq("HelLo");
      });
      it("makeFirstLowerCased('APP', 'P') should return 'ApP'", () => {
        if (!("makeFirstLowerCased" in obj))
          throw new ReferenceError("makeFirstLowerCased is not defined");
        expect(obj.makeFirstLowerCased("APP", "P")).to.eq("ApP");
      });
    });
  });
});
