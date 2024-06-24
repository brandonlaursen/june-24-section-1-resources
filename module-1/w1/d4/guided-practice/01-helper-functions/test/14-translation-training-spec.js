const chai = require("chai");
const expect = chai.expect;
const {
  translationTraining,
  removeVowel,
} = require("../problems/14-translation-training");

describe("removeVowel", function () {
  it("removeVowel('What', true) returns 'Wht'", function () {
    expect(removeVowel("What", true)).to.eq("Wht");
  });
  it("removeVowel('tedious', true) returns 'tdious'", function () {
    expect(removeVowel("tedious", true)).to.eq("tdious");
  });
  it("removeVowel('tedious', false) returns 'tdious'", function () {
    expect(removeVowel("tedious", false)).to.eq("tedios");
  });
  it("removeVowel('doing', false) returns 'dong'", function () {
    expect(removeVowel("doing", false)).to.eq("dong");
  });
  it("removeVowel('doing', true) returns 'ding'", function () {
    expect(removeVowel("doing", true)).to.eq("ding");
  });
});

describe("translationTraining", function () {
  it("translationTraining('What are you doing') returns 'Wht ar yu dong'", function () {
    expect(translationTraining("What are you doing")).to.eq("Wht ar yu dong");
  });
  it("translationTraining('This is tedious') returns 'Ths s tdious'", function () {
    expect(translationTraining("This is tedious")).to.eq("Ths s tdious");
  });
  it("translationTraining('Programming is fun') returns 'Prgramming s fn'", function () {
    expect(translationTraining("Programming is fun")).to.eq("Prgramming s fn");
  });
  it("translationTraining('My food is getting cold') returns 'My fod s gettng cld'", function () {
    expect(translationTraining("My food is getting cold")).to.eq(
      "My fod s gettng cld"
    );
  });
});
