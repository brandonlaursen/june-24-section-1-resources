require("./setup-tests");
const chai = require("chai");
const expect = chai.expect;

let plateTheDishes;
try {
  plateTheDishes = require("../problems/10-plate-the-dishes");
} catch {}

describe("10 - plateTheDishes", () => {
  describe("starting from left to right, fill all the null elements in the first argument with the elements in the second argument", () => {
    it("plateTheDishes([null, 'burger', null], ['salad']) should return ['salad', 'burger', null]", () => {
      expect(plateTheDishes([null, "burger", null], ["salad"])).to.eql([
        "salad",
        "burger",
        null,
      ]);
    });
    it("plateTheDishes(['salmon', null], ['soup', 'rice']) should return ['salmon', 'soup']", () => {
      expect(plateTheDishes(["salmon", null], ["soup", "rice"])).to.eql([
        "salmon",
        "soup",
      ]);
    });
    it("plateTheDishes(['pancake', 'eggs'], ['bagel']) should return ['pancake', 'eggs']", () => {
      expect(plateTheDishes(["pancake", "eggs"], ["bagel"])).to.eql([
        "pancake",
        "eggs",
      ]);
    });
  });

  describe("should mutate the original first argument and return it", () => {
    it("plateTheDishes([null, null, null], ['soup'])", () => {
      const plates = [null, null, null];
      const dishes = ["soup"];
      expect(plateTheDishes(plates, dishes)).to.eq(plates);
    });
  });
});
