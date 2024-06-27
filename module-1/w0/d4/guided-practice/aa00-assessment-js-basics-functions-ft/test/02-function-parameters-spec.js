require("./setup-tests");
const chai = require("chai");
const expect = chai.expect;

describe("02 - Function Parameters", () => {
  describe("productOfTwoNumbers", () => {
    it("should be a function that explicitly has two parameters", () => {
      const obj = formatFile();
      if (!("productOfTwoNumbers" in obj))
        throw new ReferenceError("productOfTwoNumbers is not defined");
      const file = fs.readFileSync(
        path.resolve(__dirname, "../problems/02-function-parameters.js"),
        "utf-8"
      );
      expect(
        file,
        "productOfTwoNumbers should have no more and no less than 2 parameters"
      ).to.match(
        /(function\s+productOfTwoNumbers\s*\(\s*[\w\d]+\s*,+\s*[\w\d]+\s*,?\s*\)\s*{)|(productOfTwoNumbers\s*=\s*\(\s*[\w\d]+\s*,+\s*[\w\d]+\s*,?\s*\)\s*=>)/
      );
    });
    context("should return the product of its parameters", () => {
      it("should return 6 if the first parameter is 2 and the second parameter is 3", () => {
        const obj = formatFile();
        if (!("productOfTwoNumbers" in obj))
          throw new ReferenceError("productOfTwoNumbers is not defined");
        expect(obj.productOfTwoNumbers(2, 3)).to.eq(6);
      });
      it("should return 20 if the first parameter is 5 and the second parameter is 4", () => {
        const obj = formatFile();
        if (!("productOfTwoNumbers" in obj))
          throw new ReferenceError("productOfTwoNumbers is not defined");
        expect(obj.productOfTwoNumbers(5, 4)).to.eq(20);
      });
    });
  });

  describe("product", () => {
    it("should evaluate to the product of 2 and 3", () => {
      const obj = formatFile();
      if (!("product" in obj))
        throw new ReferenceError("product is not defined");
      if (!("productOfTwoNumbers" in obj))
        throw new ReferenceError("productOfTwoNumbers is not defined");
      expect(obj.product).to.eq(6);
    });
    it("should use productOfTwoNumbers to calculate the product", () => {
      const file = fs.readFileSync(
        path.resolve(__dirname, "../problems/02-function-parameters.js"),
        "utf-8"
      );
      expect(file, "product should use productOfTwoNumbers").to.match(
        /\n?\s*product\s*=\s*productOfTwoNumbers\(\s*2\s*,\s*3\s*,?\s*\)/
      );
    });
  });

  describe("recipeIngredients", () => {
    it("should be a function that explicitly has three parameters", () => {
      const obj = formatFile();
      if (!("recipeIngredients" in obj))
        throw new ReferenceError("recipeIngredients is not defined");
      const file = fs.readFileSync(
        path.resolve(__dirname, "../problems/02-function-parameters.js"),
        "utf-8"
      );
      expect(
        file,
        "recipeIngredients should have no more and no less than 3 parameters"
      ).to.match(
        /(function\s+recipeIngredients\s*\(\s*[\w\d]+\s*,+\s*[\w\d]+\s*,+\s*[\w\d]+\s*,?\s*\)\s*{)|(recipeIngredients\s*=\s*\(\s*[\w\d]+\s*,+\s*[\w\d]+\s*,+\s*[\w\d]+\s*,?\s*\)\s*=>)/
      );
    });
    context(
      "should return a string of 'Recipe List: ing1, ing2, and ing3.'",
      () => {
        it("if ing1 = 'Carrots', ing2 = 'Onions', and ing3 = 'Chicken', then it should return 'Recipe List: Carrots, Onions, and Chicken.'", () => {
          const obj = formatFile();
          if (!("recipeIngredients" in obj))
            throw new ReferenceError("recipeIngredients is not defined");
          expect(obj.recipeIngredients("Carrots", "Onions", "Chicken")).to.eq(
            "Recipe List: Carrots, Onions, and Chicken."
          );
        });
        it("if ing1 = 'blueberries', ing2 = 'yogurt', and ing3 = 'honey', then it should return 'Recipe List: blueberries, yogurt, and honey.'", () => {
          const obj = formatFile();
          if (!("recipeIngredients" in obj))
            throw new ReferenceError("recipeIngredients is not defined");
          expect(obj.recipeIngredients("blueberries", "yogurt", "honey")).to.eq(
            "Recipe List: blueberries, yogurt, and honey."
          );
        });
      }
    );
  });

  describe("isInRange", () => {
    it("should be a function that explicitly has three parameters", () => {
      const obj = formatFile();
      if (!("isInRange" in obj))
        throw new ReferenceError("isInRange is not defined");
      const file = fs.readFileSync(
        path.resolve(__dirname, "../problems/02-function-parameters.js"),
        "utf-8"
      );
      expect(
        file,
        "isInRange should have no more and no less than 3 parameters"
      ).to.match(
        /(function\s+isInRange\s*\(\s*[\w\d]+\s*,+\s*[\w\d]+\s*,+\s*[\w\d]+\s*,?\s*\)\s*{)|(isInRange\s*=\s*\(\s*[\w\d]+\s*,+\s*[\w\d]+\s*,+\s*[\w\d]+\s*,?\s*\)\s*=>)/
      );
    });
    context(
      "true if testNum falls inside the inclusive range of lowNum to highNum'",
      () => {
        it("if lowNum = 0, highNum = 10, and testNum = 5, then it should return true", () => {
          const obj = formatFile();
          if (!("isInRange" in obj))
            throw new ReferenceError("isInRange is not defined");
          expect(obj.isInRange(0, 10, 5)).to.be.true;
        });
        it("if lowNum = 100, highNum = 101, and testNum = 100, then it should return true", () => {
          const obj = formatFile();
          if (!("isInRange" in obj))
            throw new ReferenceError("isInRange is not defined");
          expect(obj.isInRange(100, 101, 100)).to.be.true;
        });
        it("if lowNum = 100, highNum = 101, and testNum = 101, then it should return true", () => {
          const obj = formatFile();
          if (!("isInRange" in obj))
            throw new ReferenceError("isInRange is not defined");
          expect(obj.isInRange(100, 101, 101)).to.be.true;
        });
        it("if lowNum = 40, highNum = 60, and testNum = 30, then it should return false", () => {
          const obj = formatFile();
          if (!("isInRange" in obj))
            throw new ReferenceError("isInRange is not defined");
          expect(obj.isInRange(40, 60, 30)).to.be.false;
        });
        it("if lowNum = 40, highNum = 60, and testNum = 70, then it should return false", () => {
          const obj = formatFile();
          if (!("isInRange" in obj))
            throw new ReferenceError("isInRange is not defined");
          expect(obj.isInRange(40, 60, 70)).to.be.false;
        });
      }
    );
  });
});

const fs = require("fs");
const path = require("path");

function formatFile (...args) {
  if (!args.length) return require("../problems/02-function-parameters");
  let file = fs.readFileSync(
    path.resolve(__dirname, "../problems/02-function-parameters.js"),
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
