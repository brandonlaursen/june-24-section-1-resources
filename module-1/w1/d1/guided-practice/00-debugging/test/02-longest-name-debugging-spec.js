const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const longestName = require("../problems/02-longest-name-debugging");

describe("longestName", function() {
  it('longestName([1, 2, 3, 4, 5, 6]) returns 4', function () {
    const testNames = ["James", "Patricia", "Michael", "Elizabeth", "Chris",
                 "Sarah", "Margaret", "Kenneth", "Stephanie", "Jonathan",
                 "Jeremy", "Samantha", "Alexander", "Catherine", "Benjamin"]
    expect(
      longestName(testNames)
    ).to.eq("Elizabeth");
  });
});
