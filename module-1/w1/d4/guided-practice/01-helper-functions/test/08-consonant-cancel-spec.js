const chai = require("chai");
const expect = chai.expect;
const { consonantCancel } = require("../problems/08-consonant-cancel");

describe("consonantCancel", function () {
  it("consonantCancel('down the rabbit hole') returns 'own e abbit ole'", function () {
    expect(consonantCancel("down the rabbit hole")).to.eq("own e abbit ole");
  });
  it("consonantCancel('writing code is challenging') returns 'iting ode is allenging'", function () {
    expect(consonantCancel("writing code is challenging")).to.eq(
      "iting ode is allenging"
    );
  });
  it("consonantCancel('practice makes perfect') returns 'actice akes erfect'", function () {
    expect(consonantCancel("practice makes perfect")).to.eq(
      "actice akes erfect"
    );
  });
  it("consonantCancel('fear nothing challenge everything!') returns 'ear othing allenge everything!'", function () {
    expect(consonantCancel("fear nothing challenge everything!")).to.eq(
      "ear othing allenge everything!"
    );
  });
  it("consonantCancel('stay happy!') returns 'ay appy!'", function () {
    expect(consonantCancel("stay happy!")).to.eq("ay appy!");
  });
});
