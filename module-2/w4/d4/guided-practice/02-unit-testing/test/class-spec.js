const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {

  beforeEach(() => {
    newWord = new Word("banana");
  });


  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      // expect.fail("replace with your code");

      // const newWord = new Word("banana");

      expect(newWord).have.property("word");
    });

    it('should set the "word" property when a new word is created', function () {
      // const newWord = new Word("banana");

      expect(newWord.word).to.equal("banana");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      // const newWord = new Word("banana");

      const result = newWord.removeVowels();

      expect(result).be.equal("bnn");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      // const newWord = new Word("banana");

      const result = newWord.removeConsonants();

      expect(result).be.equal("aaa");
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {


      // const newWord = new Word("banana");
      const newWord2 = new Word("trash");

      const result = newWord.pigLatin();
      const result2 = newWord2.pigLatin();

      expect(result).be.equal("ananabay");
      expect(result2).be.equal("ashtray");


      // expect(newWord.pigLatin()).be.equal("ananabay");
    });
  });
});
