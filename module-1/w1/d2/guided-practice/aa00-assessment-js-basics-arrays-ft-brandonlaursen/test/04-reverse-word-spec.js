require("./setup-tests");
const chai = require("chai");
const expect = chai.expect;
const spies = require('chai-spies');

chai.use(spies);

let reverseWord;
try {
  reverseWord = require("../problems/04-reverse-word");
} catch {}

describe("04 - reverseWord", () => {
  let splitSpy = chai.spy.on(String.prototype, "split");
  let reverseSpy = chai.spy.on(Array.prototype, "reverse");
  let joinSpy = chai.spy.on(Array.prototype, "join");

  describe("should return the input string but reversed by using String.prototype.split and Array.prototype.join methods", () => {
    it("reverseWord('maps') should return 'spam'", () => {
      expect(reverseWord("maps")).to.eq("spam");
    });
    it("reverseWord('DRAWER') should return 'REWARD'", () => {
      expect(reverseWord("DRAWER")).to.eq("REWARD");
    });
    it("should use the String.prototype.split method", () => {
      let numCallsBefore = splitSpy.__spy.calls
        ? splitSpy.__spy.calls.length
        : 0;
      reverseWord("ten");
      let numCallsAfter = splitSpy.__spy.calls
        ? splitSpy.__spy.calls.length
        : 0;
      if (numCallsAfter <= numCallsBefore) {
        throw new Error("String.prototype.split was not called");
      }
    });
    it("should use the Array.prototype.reverse method", () => {
      let numCallsBefore = reverseSpy.__spy.calls
        ? reverseSpy.__spy.calls.length
        : 0;
      reverseWord("ten");
      let numCallsAfter = reverseSpy.__spy.calls
        ? reverseSpy.__spy.calls.length
        : 0;
      if (numCallsAfter <= numCallsBefore) {
        throw new Error("Array.prototype.reverse was not called");
      }
    });
    it("should use the Array.prototype.join method", () => {
      let numCallsBefore = joinSpy.__spy.calls ? joinSpy.__spy.calls.length : 0;
      reverseWord("ten");
      let numCallsAfter = joinSpy.__spy.calls ? joinSpy.__spy.calls.length : 0;
      if (numCallsAfter <= numCallsBefore) {
        throw new Error("Array.prototype.join was not called");
      }
    });
  });
});
