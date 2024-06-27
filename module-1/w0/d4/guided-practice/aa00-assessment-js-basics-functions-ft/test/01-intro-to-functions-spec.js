require("./setup-tests");
const chai = require("chai");
const expect = chai.expect;

describe("01 - Intro to Functions", () => {
  describe("1. greeting", () => {
    it("should evaluate to 'Hello World!' if the return value of the getGreeting function is 'Hello World!'", () => {
      const obj = formatFile(
        /function\s+getGreeting\(.*\)\s*{([^}]*\n*[^}]*)*}/,
        "function getGreeting() {\n  return 'Hello World!';\n}"
      );
      if (!("getGreeting" in obj))
        throw new ReferenceError("getGreeting is not defined");
      if (!("greeting" in obj))
        throw new ReferenceError("greeting is not defined");
      expect(obj.greeting).to.eq("Hello World!");
    });
    it("should evaluate to 'Goodbye Moon.' if the return value of the getGreeting function is 'Goodbye Moon.'", () => {
      const obj = formatFile(
        /function\s+getGreeting\(.*\)\s*{([^}]*\n*[^}]*)*}/,
        "function getGreeting() {\n  return 'Goodbye Moon.';\n}"
      );
      if (!("getGreeting" in obj))
        throw new ReferenceError("getGreeting is not defined");
      if (!("greeting" in obj))
        throw new ReferenceError("greeting is not defined");
      expect(obj.greeting).to.eq("Goodbye Moon.");
    });
  });

  describe("2. fruit", () => {
    it("should evaluate to 'orange'", () => {
      const obj = formatFile(/fruit\s*=\s*.*/, "fruit = getFruit();");
      if (!("getFruit" in obj))
        throw new ReferenceError("getFruit is not defined");
      if (!("fruit" in obj)) throw new ReferenceError("fruit is not defined");
      expect(obj.fruit).to.eq("orange");
    });
  });

  describe("3. getSingleDigitInteger", () => {
    it("should return an integer from 0 to 9", () => {
      const obj = formatFile();
      if (!("getSingleDigitInteger" in obj))
        throw new ReferenceError("getSingleDigitInteger is not defined");
      expect(obj.getSingleDigitInteger()).to.be.oneOf([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
      ]);
    });
  });
});

const fs = require("fs");
const path = require("path");

function formatFile (...args) {
  if (!args.length) return require("../problems/01-intro-to-functions");
  let file = fs.readFileSync(
    path.resolve(__dirname, "../problems/01-intro-to-functions.js"),
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
