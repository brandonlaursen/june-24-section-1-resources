const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const fib = require("../problems/22-fibonacci-number");

describe("fib", function () {
  it('fib(1) returns 1', function () {
    expect(fib(1)).to.eq(1);
  });
  it('fib(2) returns 1', function () {
    expect(fib(2)).to.eq(1);
  });
  it('fib(3) returns 2', function () {
    expect(fib(3)).to.eq(2);
  });
  it('fib(4) returns 3', function () {
    expect(fib(4)).to.eq(3);
  });
  it('fib(5) returns 5', function () {
    expect(fib(5)).to.eq(5);
  });
  it('fib(6) returns 8', function () {
    expect(fib(6)).to.eq(8);
  });
  it('fib(10) returns 55', function () {
    expect(fib(10)).to.eq(55);
  });
  it('fib(11) returns 89', function () {
    expect(fib(11)).to.eq(89);
  });
  it('fib(12) returns 144', function () {
    expect(fib(12)).to.eq(144);
  });
});
