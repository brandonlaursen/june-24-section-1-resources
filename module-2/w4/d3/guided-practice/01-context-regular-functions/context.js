function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }

}

const nemo = new Fish('Nemo');
// console.log(nemo);
/********************************* Scenario 1 *********************************/
// eat(); // context is global object


/********************************* Scenario 2 *********************************/
// console.log(nemo);
// nemo.eat = eat;
// nemo.eat(); // context is nemo,  nemo is this, its calling eat

// console.log(nemo);

// console.log(Object.getOwnPropertyNames(nemo));
// console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(nemo)))

/********************************* Scenario 3 *********************************/
// {}.name
// nemo.eat = eat;
// eat(); // were calling eat on the global object
/*

you are assigning the eat function to the nemo object but then calling eat directly without any context of the nemo object so it is still referring to the global scope

When you call eat(), without an object, this will refer to the global object.  Since there is no  name property on the global object, this.name will be undefined.
*/

/********************************* Scenario 4 *********************************/
// nemo.swim(); // Invoking swim on the Nemo object
// console.log(nemo);
// console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(nemo)))

/********************************* Scenario 5 *********************************/
// undefined.name
const swim = nemo.swim;

const binded = nemo.swim.bind(Fish);
// binded();// Nemo swimming in the water

// swim(); // ?
// TypeError: Cannot read properties of undefined (reading 'name')
// functions within in a class are defaulted to strict mode
// therefore we do not have access to the global object, were trying to do undefined.name so we get an error
