require("./setup-tests");
const chai = require("chai");
const expect = chai.expect;

let extractInitials;
try {
  extractInitials = require("../problems/06-extract-initials");
} catch {}

describe("06 - extractInitials", () => {
  describe("should return the first uppercased character of each word in the input string", () => {
    it("extractInitials('John Fitzgerald Kennedy') should return 'JFK'", () => {
      expect(extractInitials("John Fitzgerald Kennedy")).to.eq("JFK");
    });
    it("extractInitials('michael jackson') should return 'MJ'", () => {
      expect(extractInitials("michael jackson")).to.eq("MJ");
    });
  });
});
