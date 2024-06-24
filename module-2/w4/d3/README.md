# `Week 4 Day 3`

- Context Demo
- Exercise: Context in Regular Functions
- Bind Demo
- Practice: Bind
- Call and Apply Demo
- Practice: Call and Apply
- Arrow Functions and Context Demo
- Practice: Arrow Functions and Context

## `Context`
 * Every function scope and context
  * Scope refers to the visibility and availability of variables,
  * Context refers to the value of the this keyword when code is executed.

### Method
  * When learning about objects you previously came across the idea of a method. A method is a function that belongs to an object.

### This
  * There will be times when you will have to know WHICH object a method belongs to.
  * The keyword this exists in every function and it evaluates to the object that is currently invoking that function.
  * So the value of THIS relies entirely on WHERE a function is invoked.


### Function style invocation
 * Function this will be the global object
 * the global object is what is calling the method
 * remember THIS refers to where the function was invoked
 * this function was invoked in the global scope
 * if in browser it would be the browser object
```js

function sayHello(name) {
	console.log(this) // Global object in node, window in browser
	console.log('hello ' + name)
}

sayHello('maica') // hello maica
```

###  Plain old javaScript Object
```js
const elephant = {
  name:'funkfreed',
  age: 1,
  whatIsThis: function () {
		console.log(this);
	},
	sayAge: function () {
		console.log(`my name is ${this.name} and i am ${this.age}`);
	}
};

// * Method style invocation
// * elephant object is our context
// * this refers to the elephant object
// * this.name is funkfreed
// * this.age is 1
elephant.whatIsThis(); // { name: 'funkfreed', age: 1, ... }
elephant.sayAge(); // my name is funkfreed and i am 1
```

### Problems with context
```js
const elephant2 = {
  name:'funkfreed',
  age: 1,
  whatIsThis: function () {
		console.log(this);
	},
	sayAge: function () {
		console.log(`my name is ${this.name} and i am ${this.age}`);
	}
};

// weve removed the function from its context, making the context or what calls it the global object
let sayAgeFunc = elephant2.sayAge;
// console.log(this)// Global Object - {}
// console.log(sayAgeFunc());// my name is undefined and i am undefined
```

### What happened?
  * weve lost context
  * We stored in a variable the function by keying into the object
  * Weve lost the context of the elephant
  * before we called the function on the elephant object
  * Now we are calling the function upon the global object
  * in the global object we haven't defined a name or age variable


### How to ensure context doesnt change
 * use Bind!

## `Bind`
```js
const elephant3 = {
  name:'funkfreed',
  age: 1,
  whatIsThis: function () {
		console.log(this);
	},
	sayAge: function () {
		console.log(`my name is ${this.name} and i am ${this.age}`);
	}
};
```

### What did we do here?
  * We are binding context of the sayAge function to the elephant3 object
  * Now when its called; this refers to elephant3 as opposed to the global object
  * note the use of the bind
  * we are keying into elephant3.sayAge function and binding it to the elephant3 object
  * Syntax
    * Function.bind(context)
    * function = elephant3.sayAge
    * context = elephant3
  * This now refers to elephant3
  * boundSayAgeFunc will now always reference elephant3
  * bind returns a function

```js
// * variable holds function bound to elephant3
let boundSayAgeFunc = elephant3.sayAge.bind(elephant3);
// boundSayAgeFunc(); // my name is funkfreed and i am 20
```

### Binding multiple context to create multiple functions
```js
const elephant4 = {
	name: 'funkfreed',
	age: 1
}

const cat = {
	name: 'mochi',
	age: 2
}

function sayAge() {
	console.log(`my name is ${this.name} and i am ${this.age}`);
}

// * Function.bind(context)
let elephantBoundFunc = sayAge.bind(elephant4);
let catBoundFunc = sayAge.bind(cat);

// elephantBoundFunc(); // my name is wally and i am 1
// catBoundFunc(); // my name is mochi and i am 2
```

### We have bound a function to different objects
  * elephantBoundFunc holds the sayAge function bound to elephant4
    * this.name would refer to funkfreed
  * catBoundFunc holds the sayAge function bound to cat
    * this.name would refer to mochi

### Common Misconceptions
  * scope: availability of variables at a line in your app
  * context: the value of this


### Can bind functions to any object
```js
const dragon = {
  name: "Smaug",
  sayName: function () {
    console.log("Hello my name is " + this.name);
  }
};

const orc = {
  name:'Azog'
}

// * Function.bind(context)
// * binding sayName function to dragon object
let dragonNameFunc = dragon.sayName.bind(dragon);
// dragonNameFunc();// Hello my name is Smaug

// * binding sayName function to orc object
let orcNameFunc = dragon.sayName.bind(orc);
// orcNameFunc();// Hello my name is Azog

// * All that matters is we have a function and object to bind it to
```

### Context with classes
```js
class Cat {
  constructor(name, age, breed) {
      this.name = name;
      this.age = age;
      this.breed = breed;

  }
  print() {
      console.log(this)
  }

  // ! Talk about when going over arrow functions
  // fatArrowPrint = () => console.log(this)

  static printCats(cats) {
      return cats.forEach(cat => {
          console.log(cat)
      })
  }

}
```

### Calling method on class
 * context is newCat
 ```js
let newCat = new Cat('Pumpkin', 3, 'Ragamuffin')
newCat.print() //this refers to the newCat object that is an instance of Cat class;
// Cat { name: 'Pumpkin', age: 3, breed: 'Ragamuffin' }

// * weve lost context
let printCat = newCat.print;
printCat();// undefined

// * use bind to bind context to a specific instance
let bindPrintCat = newCat.print.bind(newCat);
bindPrintCat();// Cat { name: 'Pumpkin', age: 3, breed: 'Ragamuffin' }

// ! Talk about when going over arrow functions
// * or use fat arrow function
// * fat arrow will use context in which function is defined
let arrowPrintName = newCat.fatArrowPrint;
arrowPrintName();// Cat { name: 'Pumpkin', age: 3, breed: 'Ragamuffin' }
```
- anytime method is defined in a class its automatically undefined
- anything defined withing a class is automatically in a strict mode- even if we extract


## `Context and Bind Practices (SOLO, 1h)`
- Exercise: Context in Regular Functions
- Practice: Bind

## `Exercise: Context in Regular Functions Walkthrough`

## `Call and Apply`
  * JavaScript also has two alternative function methods that allow you to bind context.
  * While bind returns a function that can be called multiple times with the given context,
  * call and apply will invoke the bound function immediately, returning the return value from that function.

### assigning return of func.call() to a variable
```js
  let callReturn = func.call(context, ...args);
```
### assigning return of func.apply() to a variable
```js
  let applyReturn = func.apply(context, [...args]);
```
### Syntax
  * Function.call/apply (this, arguments to function)
  The only difference between the two comes in the remaining arguments:
  * call spreads them out in comma-separated values
    ! C for comma
  * Apply takes in arrays of arguments
    ! A for array

```js
class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Cat {
  constructor(name) {
      this.name
  }
  purrNTimes(n) {
      for(let i = 0; i < n; i++) {
          console.log(`${this.name} says: meow`);
      }
  }
}

let dog = new Dog('Scooby');
let cat = new Cat('Garfield');

// * Function.call/apply (this, arguments to function)
// * make Scooby meow 5 times using call
// * we are accesing the function - cat.purrNTimes
// * and using the call method passing the dog context
// ! notice no array
// * We are telling js to use the cats method to meow but binded to the dog context
cat.purrNTimes.call(dog, 5);

// * instead here we are using apply
// ! notice the array
// * make Scooby meow 5 times using apply
cat.purrNTimes.apply(dog, [5]);
```


## `Call, Apply Practices (SOLO, 20m)`

- Practice: Call and Apply

## `Call and Apply Practice Walkthrough`

## `Arrow Functions and Context`

Arrow functions do not have their own binding to `this`. They are not bound to a context at runtime like other functions. Their context is defined by their lexical environment, so context is defined by their definition, similar to a closure.

### Function declaration
* Function declaration
```js
function sayHello1(name) {
	return ` hello ${name}`
}
```
### Arrow syntax
 * non implicit return
 * fat arrows with curly braces need an explicit return
```js
const sayHello2 = (name) => {
	return ` hello ${name}`
}
```

### implicit return
 * fat arrows without curly brackets have an implicit return
```js
const sayHello3 = (name) => `hello ${name}`
```

### Context with arrow functions
* ! Cannot bind a function defined with fat arrow function
```js
const gorilla = {
	name: "Harambe",

	wrappedSayName: function () {
    console.log(this); // { name: 'Harambe', ... }
		return function () {
      // normal function loses context here as they do not use the context of what they are defined in
			console.log(this); // GLOBAL
			console.log("Hello my name is " + this.name);
		}
	},

	wrappedArrowSayName: function () {
		console.log(this); // { name: 'Harambe', ... }
    // arrow function this will refer to the context on the above line
		return () => {
			console.log(this); // { name: 'Harambe', ... }
			console.log("Hello my name is " + this.name);
		};
	}
};

let wrapped = gorilla.wrappedSayName();
let arrowWrapped = gorilla.wrappedArrowSayName();

wrapped(); // Hello my name is undefined
arrowWrapped() // Hello
```

### Whats going on?
  * arrow funcs automatically bind context to the context that they are defined in, regular functions do not

### We are storing the return value of a function which is a function in a variable by keying into the object
  * with a normal function we lose context
```js
  let wrapped = gorilla.wrappedSayName();
```
  wrapped holds a function thats lost its context

  * with a arrow function
  ```js
  let arrowWrapped = gorilla.wrappedArrowSayName();
  ```
  * because arrow functions use the context of the function that it is defined in
  * the context will refer to the the gorilla context
  * therefore context is not lost as fat arrow automatically under the hood has set context to gorilla
*/


### Context with classes
```js
class Cat {
  constructor(name, age, breed) {
      this.name = name;
      this.age = age;
      this.breed = breed;

  }
  print() {
      console.log(this)
  }

  // go over
  fatArrowPrint = () => console.log(this)

  static printCats(cats) {
      return cats.forEach(cat => {
          console.log(cat)
      })
  }

}


// * or use fat arrow function
// * fat arrow will use context in which function is defined
let arrowPrintName = newCat.fatArrowPrint;
arrowPrintName();// Cat { name: 'Pumpkin', age: 3, breed: 'Ragamuffin' }
```

## `Arrow Functions Practices (SOLO, 30m)`
- Practice: Arrow Functions and Context

## `Practice: Arrow Functions and Context Walkthrough`

## `Long Practice: Context (Paired)`
