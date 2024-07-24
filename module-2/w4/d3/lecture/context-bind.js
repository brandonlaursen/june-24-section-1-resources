


/*


 Context
  * Every function scope and context
  * Scope refers to the visibility and availability of variables,
  * Context refers to the value of the this keyword when code is executed.

  Method
  * When learning about objects you previously came across the idea of a method. A method is a function that belongs to an object.

  This
  * There will be times when you will have to know WHICH object a method belongs to.
  * The keyword this exists in every function and it evaluates to the object that is currently invoking that function.
  * So the value of THIS relies entirely on WHERE a function is invoked.


*/

// 'use strict';


function myFunc() {
  console.log(this);
}


// myFunc()




// Plain old javaScript Object
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


// method style invocation
// elephant.whatIsThis();
// elephant.sayAge();// my name is funkfreed and i am 1

// ! PROBLEM WITH CONTEXT
let sayAgeFunc = elephant.sayAge

// console.log(sayAgeFunc);

// console.log(sayAgeFunc);// [Function: sayAge]
// console.log(this);
// sayAgeFunc();



const animal = {
  name : 'tiger',
  whatIsThis : function () { return this.name}
}
let name1 = animal.whatIsThis();// this gives return value of function
let name2 = animal.whatIsThis;// this would be the function itself
// console.log(name);//    Shouldnt this return undefined?
// console.log(name());


// console.log(this);
// this.name = 'brandon';
// console.log(this);

// console.log(name2());

// let myName = 'brandon';
// console.log(name2());

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

const unboundFunc = elephant2.whatIsThis;
const unboundFunc2 = elephant2.sayAge;
/*
const unboundFunc2 = function () {
		console.log(`my name is ${this.name} and i am ${this.age}`);
	}

*/
// console.log(unboundFunc);
// console.log(unboundFunc());
// console.log(unboundFunc2);
// unboundFunc2();// my name is undefined and i am undefined

// use bind!

// function.bind(object);
// let boundSayAgeFunc = elephant2.sayAge.bind(elephant2)
// console.log(boundSayAgeFunc());// my name is funkfreed and i am 1



// BINDING MULTIPLE CONTEXTS TO CREATE MULTIPLE FUNCS
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

let sayHeyElephant = sayAge.bind(elephant4);
// sayHeyElephant();

let sayHeyCat = sayAge.bind(cat);
// sayHeyCat();




// CAN BIND FUNCS TO WHATEVER OBJECT WE LIKE
const dragon = {
  name: "Smaug",
  sayName: function () {
    console.log("Hello my name is " + this.name);
  }
};

const orc = {
  name:'Azog'
}


const sayHeyFunc = dragon.sayName;
// console.log(sayHeyFunc);
// sayAgeFunc();


const sayHeyOrc = dragon.sayName.bind(orc);

// sayHeyOrc();// Hello my name is Azog







// CONTEXT WITH CLASSES
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
  fatArrowPrint = () => console.log(this)

  static printCats(cats) {
      return cats.forEach(cat => {
          console.log(cat)
      })
  }

}


let newCat = new Cat('pumpkin', 5, 'ragamuffin')
// console.log(newCat);// Cat { name: 'pumpkin', age: 5, breed: 'ragamuffin' }

// newCat.print();// Cat { name: 'pumpkin', age: 5, breed: 'ragamuffin' }

// let printCat = newCat.print;
// console.log(printCat);

// console.log(printCat());

// let bindPrintCat = newCat.print.bind(newCat);

// bindPrintCat();

let arrowPrintName = newCat.fatArrowPrint;

arrowPrintName();
