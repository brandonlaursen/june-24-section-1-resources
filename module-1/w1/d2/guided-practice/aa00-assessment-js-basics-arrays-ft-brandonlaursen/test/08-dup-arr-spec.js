require("./setup-tests");
const chai = require("chai");
const expect = chai.expect;

const obj = require("../problems/08-dup-arr");

describe("08 - Duplicate Arrays", () => {
  describe("Problem 1: dupArr", () => {
    describe("should return an array with the same elements as the input array", () => {
      it("dupArr(['hello', 1, 2, 3]) should return ['hello', 1, 2, 3]", () => {
        if (!("dupArr" in obj))
          throw new ReferenceError("dupArr is not defined");
        expect(obj.dupArr(["hello", 1, 2, 3])).to.eql(["hello", 1, 2, 3]);
      });
    });

    describe("should return a new array without mutating the original input array", () => {
      it("dupArr(['celebrate', 'the', 'new', 'year', 2024])", () => {
        if (!("dupArr" in obj))
          throw new ReferenceError("dupArr is not defined");
        let arr = ["celebrate", "the", "new", "year", 2024];
        expect(obj.dupArr(arr)).to.not.eq(arr);
        expect(arr).to.eql(["celebrate", "the", "new", "year", 2024]);
        expect(obj.dupArr(arr)).to.be.instanceOf(Array);
      });
    });
  });

  describe("Problem 2: reverseDupArr", () => {
    describe("should return an array with the same elements as the input array, but reversed", () => {
      it("reverseDupArr(['world', 6, '!']) should return ['!', 6, 'world']", () => {
        if (!("reverseDupArr" in obj))
          throw new ReferenceError("reverseDupArr is not defined");
        expect(obj.reverseDupArr(["world", 6, "!"])).to.eql(["!", 6, "world"]);
      });
    });

    describe("should return a new array without mutating the original input array", () => {
      it("reverseDupArr(['throw', 'a', 'party'])", () => {
        if (!("reverseDupArr" in obj))
          throw new ReferenceError("reverseDupArr is not defined");
        let arr = ["throw", "a", "party"];
        expect(obj.reverseDupArr(arr)).to.not.eq(arr);
        expect(arr).to.eql(["throw", "a", "party"]);
        expect(obj.reverseDupArr(arr)).to.be.instanceOf(Array);
      });
    });
  });
});
