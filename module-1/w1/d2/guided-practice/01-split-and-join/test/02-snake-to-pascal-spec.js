const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const snakeToPascal = require("../problems/02-snake-to-pascal");

describe("snakeToPascal", function () {
    it("snakeToPascal('snakes_go_hiss') returns SnakesGoHiss", function () {
        expect(snakeToPascal('snakes_go_hiss')).to.eq('SnakesGoHiss');
    });
    it("snakeToPascal('say_hello_world') returns SayHelloWorld", function () {
        expect(snakeToPascal('say_hello_world')).to.eq('SayHelloWorld');
    });
    it("snakeToPascal('app_academy_is_cool') returns AppAcademyIsCool", function () {
        expect(snakeToPascal('app_academy_is_cool')).to.eq('AppAcademyIsCool');
    });
    it("snakeToPascal('APp_ACADEMY_iS_cOol') returns AppAcademyIsCool", function () {
        expect(snakeToPascal('APp_ACADEMY_iS_cOol')).to.eq('AppAcademyIsCool');
    });
});
