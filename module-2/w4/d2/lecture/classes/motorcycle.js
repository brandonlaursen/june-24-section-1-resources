


/*

  Inheritance
  * mechanism that passes traits of a parent class to its descendants
  * prevents duplication of code
  * base a class (child class) upon another class (parent class)
  * child class will have access to properties and methods defined within parent
  * use extends keyword to extend Child class from Parent class
  * typically applied to classes


  Super keyword
  * calls parent classes constructor function with specified arguments
  * EX: calling `super(name, make, model)` assigns this.name, this.make, this.model to whatever Motorcycle instance calls it
  * Super imposing name, make model into the constructor
  * saves us from having to write this.name, this.make, this.model
  * Remember DRY - Do not repeat yourself
  * Must call super if there is constructor
  * Dont have to pass all properties
  * Super go up the chain to parent classes until there is no parent

  Extend keyword
  * Tell javascript to extend the Car class
  * allows child to inherit properties + methods of parent


  Polymorphism
  * Each object, class, or prototype can be assigned attributes and methods that extend the behavior of its ancestors.
  * A type of polymorphism is subtype polymorphism where a subclass uses inheritance and extends upon the functionality of a parent class.
  * For example, we can overwrite the parent car class

*/



const Car = require('./car');


class Motorcycle extends Car {
  constructor(name, make, model, milage) {
    super();

    this.name = name;
    this.make = make;
    this.model = model;

    // Motorcycle.num += 1

  };

  // static num = 0;


}


class Bicycle extends Motorcycle{
};



const bike = new Bicycle('huffy', 'wheelie', 'fast');

console.log(Bicycle.num);

function scope(){

  // let name = 'brandon';

  if(true) {
    // let name = 'brandon';

    if(true) {
      // let name = 'brandon';

      console.log(name);
    }
  }
}

// const harley = new Motorcycle('harley', 'HD' ,'sportster', 30)

// console.log(harley);

// console.log(Motorcycle.num)


// class Airplane extends Motorcycle {
//   constructor(){

//     Airplane.num += 1;
//   }

//   static num = 0;
// }

// const plane = new Airplane('plane', 'airbus','747');

// console.log(plane.numCars);

// console.log(Airplane.num);


// console.log(harley.noise);// braaaaap
// console.log(harley.makeNoise());


// console.log(Car.numCars);


// console.log(harley);
