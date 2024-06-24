const chai = require("chai");
const expect = chai.expect;
const sundaeOrder = require("../problems/01-sundae-order");

describe("sundaeOrder", function() {
  it("sundaeOrder() returns a function", function () {
    expect(typeof sundaeOrder()).to.eq('function');
  });
  it("sundaeOrder()('nuts') returns 'A bowl of ice cream with hot fudge and nuts'", function () {
    expect(sundaeOrder()('nuts')).to.eq('A bowl of ice cream with hot fudge and nuts');
  });
  it("sundaeOrder with toppings of 'nuts' and 'caramel' returns 'A bowl of ice cream with hot fudge and nuts and caramel'", function () {
    const sundaeOrder1 = sundaeOrder();
    sundaeOrder1('nuts')
    expect(sundaeOrder1('caramel')).to.eq('A bowl of ice cream with hot fudge and nuts and caramel');
  });
  it("sundaeOrder()('banana') returns 'A bowl of ice cream with hot fudge and banana'", function () {
    expect(sundaeOrder()('banana')).to.eq('A bowl of ice cream with hot fudge and banana');
  });
});
