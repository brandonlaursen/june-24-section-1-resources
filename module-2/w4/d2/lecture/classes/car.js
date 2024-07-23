/*

  Classes vs JavaScript Objects
  * In strictest terms, an object class is the definition of an object, and an object instance is a use of that object. Quite often developers loosely use the generic term "object" to refer to either or both. Or sometimes "object" means a data structure with key-value storage represented by curly-braces (a.k.a. POJO - Plain Old JavaScript Object).

  What is OOP?
  * Object-Oriented Programming (OOP) is an approach or mindset for breaking down large, complex products into simple solutions. The smaller parts can then be implemented and tested separately to provide higher confidence in the overall solution.
  * We will use OOP to design classes
  * Adjectives - The characteristics are called properties or attributes of the object.
  * Verbs- The actions are called methods of the object.

  Creating a Class!
  * JS uses OOP
  * OOP in JavaScript means defining your own object classes, so you can go way beyond the built-in ones like Object and Array!

  Defining are own JS Class
  * A class defines the attributes and behavior for an object type. Classes in JavaScript are defined using the class keyword, followed by the name of the class, and a set of curly braces.

  * Classes are used as a blueprint to create instances of the class

  EX:
  * Lets say we made a car class
  * Dodge would be instance of the car class
  * What adjectives could we use to describe a car?
    * color
    * make
    * model
    * type
    * milage
  * What verbs could we expect a car to have?
    * drive
    * park
    * honk horn
    * rev engine

  Constructor keyword
  * The `constructor` keyword indicates special "factory" method,
  * Used to help create instances of classes when passed arguments
  * constructor methods don't explicitly return a value. When instantiating class instances with the new keyword, constructor methods implicitly return the newly created object instance. (You'll see an example in a bit.)
  * Within a constructor method's body, the this keyword references the newly created object instance. This allows you to initialize properties on the object instance.

  This keyword
  * refers to current instance of a class

  Defining methods
    * verb on class - perform an action
    * methods are usually invoked in an instance of a class we would call that a instance method
    ex: const list = new Array(1,5,3,9,11,-3);
    console.log(list.sort());                // [ -3, 1, 11, 3, 5, 9 ]
    console.log(list.sort((a, b) => a - b)); // [ -3, 1, 3, 5, 9, 11 ]
  *.sort is a instance method on the array class
  let arr = [] is a short cut for let arr = new Array()

*/


class Car {
  constructor(name, make, model) {
    this.name = name;
    this.make = make;
    this.model = model;

    Car.numCars += 1;
    Car.garage.push(this);
  }

  // instance method
  makeNoise() {
    return `${this.name} goes vroooom!`;
  }

  static numCars = 0;
  static garage = [];


  // static method, called on the class itself NOT an instance
  static getCars(...cars) {
    return cars.map(car => car);
  }

}


const challenger = new Car('challenger', 'dodge', 'hellcat', 10);
// console.log(challenger);// Car { name: 'challenger', make: 'dodge', model: 'hellcat' }
// console.log(challenger.makeNoise());// challenger goes vroooom!

const mustang = new Car('mustang', 'ford', 'shelby');
// console.log(mustang);// { name: 'mustang', make: 'ford', model: 'shelby' }
// console.log(mustang.makeNoise());// challenger goes vroooom!

// console.log(Car.getCars(challenger, mustang));// [ 'challenger', 'mustang' ]
// console.log(mustang.getCars(mustang, challenger));

console.log(Car.numCars);// 2
console.log(Car.garage);

Car.garage.forEach(car => console.log(car));
// console.log(mustang);
// delete mustang;

// console.log(mustang);

// console.log(mustang.numCars);
