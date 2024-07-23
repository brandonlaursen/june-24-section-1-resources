

function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`)
}

sayHelloTo("Woody");

//!!START SILENT
module.exports = { sayHelloTo };
//!!END