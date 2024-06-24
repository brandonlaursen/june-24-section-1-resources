# `Week 4 Day 2`

- CommonJS Modules Demo
- Practice: CommonJS Modules
- Class Syntax Demo
- Practice: Class Syntax
- Inheritance Demo
- Practice: Inheritance
- Polymorphism Demo
- Practice: Polymorphism

## `CommonJS Modules`

Overview

- up until now we've put all our code in single JS file
- as code base gets larger we'll want to break our code up into multiple files
- each file containing a logical unit of code that defines a module.

Modules

- a module is just a javascript file
- local module: defined within your project
- core modules: native modules contained within Node.js
  - don't have to npm install
  - ex: `path`, `readline`, `fs`
- third party modules: imported using npm

Module systems

- recent node versions contain two different systems
  1.  CommonJS (legacy system)
  2.  ES Modules (newer system)
- conceptually similar
- syntax/implementation details differ

The Module Object

- each module in node has access to a `module` object
- represents current module
- contains number of properties with info about current module

The `module.exports` Property

- object used to export items from the module

To Export a Single Item:

- set `module.exports` equal to that item
- OR
- define property for that item on the `module.exports` obj


Common JS Modules:
```js
// animal.js
class Dog {}
class Cat {}
module.exports = { Cat, Dog }
// or
// module.exports = { Cat: Cat, Dog: Dog }
// or
// module.exports.Cat = Cat;
// module.exports.Dog = Dog;


// shelter.js
class Shelter {}
module.exports = Shelter


// index.js
const { Cat, Dog } = require('./animal');
const Shelter = require('./shelter')

```
## `Practice : CommonJS Modules - 30m(SOLO)`

## `Practice: CommonJS Modules Walkthrough`

## `OOP`

### What is OOP

- approach for breaking down large, complex products into simple solutions
- smaller parts can be implemented and tested separately
- results in higher confidence in overall solution
- makes it easier to pinpoint issues with code

### The Big Picture

- group data and related actions / behaviors together
- treat as single entity within a larger system

### 4 Pillars of OOP

#### Encapsulation

- the practice of bundling related properties and behaviors into
  one class
- each class has a purpose and is responsible for keeping track of
  properties related to that purpose and providing the methods
  necessary to manage those properties

#### Inheritance

- mechanism that passes traits of a parent class to its descendants
- prevents duplication of code

#### Polymorphism

- provides a way to perform a single action in different forms by
  calling the same method on different objects
- OVERRIDING VS OVERLOADING:
  - overriding refers to the fact that you can create instance methods with the same name in child classes and the last defined method (the method defined in the child class) will be the one executed
  - overloading refers to defining an instance method in a child class with the same name, but that takes in different variables. Javascript does NOT support overloading, but does support overriding.

#### Abstraction

- implemented to hide unnecessary data and withdraw relevant data

### Classes vs JavaScript Objects
  * In strictest terms, an object class is the definition of an object, and an object instance is a use of that object. Quite often developers loosely use the generic term "object" to refer to either or both. Or sometimes "object" means a data structure with key-value storage represented by curly-braces (a.k.a. POJO - Plain Old JavaScript Object).

### Creating a Class!
  * JS uses OOP
  * OOP in JavaScript means defining your own object classes, so you can go way beyond the built-in ones like Object and Array!

  Defining are own JS Class
  * A class defines the attributes and behavior for an object type. Classes in JavaScript are defined using the class keyword, followed by the name of the class, and a set of curly braces.

  * Classes are used as a blueprint to create instances of the class

### EX:
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

### Constructor keyword
  * The `constructor` keyword indicates special "factory" method,
  * Used to help create instances of classes when passed arguments
  * constructor methods don't explicitly return a value. When instantiating class instances with the new keyword, constructor methods implicitly return the newly created object instance. (You'll see an example in a bit.)
  * Within a constructor method's body, the this keyword references the newly created object instance. This allows you to initialize properties on the object instance.

### This keyword
  * refers to current instance of a class

### Defining methods
* verb on class - perform an action
* methods are usually invoked in an instance of a class we would call that a instance method
```js
const list = new Array(1,5,3,9,11,-3);
console.log(list.sort());                // [ -3, 1, 11, 3, 5, 9 ]
console.log(list.sort((a, b) => a - b)); // [ -3, 1, 3, 5, 9, 11 ]
*.sort is a instance method on the array class
let arr = [] //is a short cut for let arr = new Array()
```

### Example class
```js
class Car {
  constructor(name, make, model) {
    this.name = name;
    this.make = make;
    this.model = model;
    this.noise = 'vrooooom';

    // each time a car instance is made; the Car class static variable will be incremented
    Car.numCars += 1;
  }


  makeNoise() {
    return ` Car goes ${this.noise}!`
  }


  /*
    * Static variable
    - similar to static methods, static variables, or properties, are not accessible via class instances, but rather are accessed directly from the class. Static variables, unlike instance variables, aren't declared inside the constructor method.
  */
  static numCars = 0;

  // * Instance method - method used on instance of class
  getInfo() {
    return `${this.name} ${this.make} ${this.model}`;
  }

}
```

* `Static method` - method used on the class itself across all instances of the class
* As opposed to instance methods, static methods are invoked directly on a class, not on an instance. Hence, they are also referred to as class methods.
* uses `static` keyword
    * you pass to a static method instances of a class as arguments
    * static methods do not use the this keyword as its not an instance
    * static methods allow us to access groups of instances
    * no need for function keyword

```js
static getCars(...cars) {
return cars.map((car) => car.name);
};
```



### New keyword
  * used to create instance of a class
  * properties are sent to the constructor to CONSTRUCT an instance of that class

  Three things occur when instantiating an instance of a class:
  * A new empty object is created (i.e. {})
  * The constructor method is called and this is bound to the new object
  * The new object is returned after the constructor method has completed


 - We are creating an instance of the Car class
 - The new keyword is telling js we are creating a new instance of the car class
 - we pass properties the classes constructor to create an instance of the Car class
 - the instance is the Challenger THIS is challenger
```js
const Challenger = new Car("Challenger", "Dodge", "Hellcat");
// console.log(Challenger);
// * calling a instance method
// * getInfo is called on an instance of the class
// * whats the instance? This - Challenger
console.log(Challenger.getInfo());

// * another instance of a class
const Mustang = new Car('Mustang', 'Ford', 'Shelby')
const carNames = Car.getCars(Mustang, Challenger);
// * check if instance of a class
// console.log(Mustang instanceof Car);// true

// * Checking static variable on class itself
// ! not used on instance of class
// console.log(Car.numCars)


// * exporting a class
module.exports = Car;
```

## `Practice: Class Syntax - 20m(Solo)`

## `Practice: Class Syntax Walkthrough`



## `Inheritance`
  * mechanism that passes traits of a parent class to its descendants
  * prevents duplication of code
  * base a class (child class) upon another class (parent class)
  * child class will have access to properties and methods defined within parent
  * use extends keyword to extend Child class from Parent class
  * typically applied to classes


### Super keyword
  * calls parent classes constructor function with specified arguments
  * EX: calling `super(name, make, model)` assigns this.name, this.make, this.model to whatever Motorcycle instance calls it
  * Super imposing name, make model into the constructor
  * saves us from having to write this.name, this.make, this.model
  * Remember DRY - Do not repeat yourself
  * Must call super if there is constructor
  * Dont have to pass all properties
  * Super go up the chain to parent classes until there is no parent

### Extend keyword
  * Tell javascript to extend the Car class
  * allows child to inherit properties + methods of parent

### Polymorphism
  * Each object, class, or prototype can be assigned attributes and methods that extend the behavior of its ancestors.
  * A type of polymorphism is subtype polymorphism where a subclass uses inheritance and extends upon the functionality of a parent class.
  * For example, we can overwrite the parent car class

```js
const Car = require('./car');


// ! encapsulation
class Motorcycle extends Car{
  constructor(name, make, model, milage){
    // * only pass to super what we inherit from parent class
    super(name, make, model);
    // ! inheritance
    // super lets us follow dry; so we don't have to retype this.name

    // * maybe we want to add a new property, still have to pass to constructor
    this.milage = milage;

    // ! polymorphism
    // overriding parent variable through
    this.noise = 'braaaaap';
    Motorcycle.numCycles += 1

  };

  // ! polymorphism
  static numCycles = 0;
  // ! polymorphism
  // overriding parent method through
  makeNoise() {
    return ` Motorcycle goes ${this.noise}!`
  }
}

const Harley = new Motorcycle('Harley', 'Harley Davidson', 'Sportster', '50mpg')
// console.log(Harley)

// * inhering method from parent
// * we could use polymorphism to overwrite the method of the parent class
// * we will do so with the make noise method
// * we are inhering the method from the parent
const MotorcycleNames = Motorcycle.getCars(Harley);
console.log(MotorcycleNames);

console.log(Harley.makeNoise())
console.log(Motorcycle.numCycles)


/*
Leaving off constructor
  * if there aren't any additional attributes, can leave off constructor func
  * automatically runs parents constructor function
*/

class Truck extends Car{
}

// * creating instance of Truck class
// * calls parent constructor to create properties
const F150 = new Truck('F150', 'FORD','RAPTOR' )
console.log(F150);
```


## `Practice: Inheritance + Polymorphism - 1h(Solo)`

## `Practice: Inheritance Walkthrough`
## `Practice: Polymorphism Walkthrough`

## `Long Practice Time (Paired, Until EOD)`

- Friendly and Evil Dragons (do this first)
- Manager and Employee Salaries (do this only after you are confident on the first practice)
- Adventure Project (avoid this practice unless feely extremely confident, there are a lot of issues with the instructions and practice as a whole)
