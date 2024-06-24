# `Week 2 Day 1`

- Assessment
- Arrow Functions Demo
- POJO Demo
- Plain Old JavaScript Object (POJO) Practice
- Iterating through Objects Demo
- Iterating Through Objects Practice

## `Assessment (1h49m)`

## `Arrow Functions`

### What are Fat arrow functions?

- Arrow functions, a.k.a. Fat Arrows (=>), are a more concise way of declaring functions.
- More convenient way to pass callback functions(We will learn about on Wednesday)
- Arrow functions are the preferred syntax when using an anonymous function as a callback.

```js
[1, 2, 3].map((num) => num * 2); // [2,4,6]
```

## Function expression

- Storing an anonymous function in a variable
- Anon function is a function with no name

```js
let hello = function (name) {
  return "Hello " + name;
};

console.log(hello("Brandon")); // Hello Brandon
```

### Multiple statement arrow function

```js
(parameters, go, here) => {
  statement1;
  statement2;
  return <a value>;
}
```

### Fat arrow function

- removal of the function keyword, and the addition of the fat arrow (=>)
- can omit the parenthesis if only one parameter

```js
let arrowHello = (name) => {
  // statement1;
  // statement2;
  return "Hello " + name;
};

console.log(arrowHello("Maica")); // Hello Maica
```

### Single expression arrow functions

- Can do Implicit returns
- Must be a function with a single expression block
  - argument => expression;
  - Expression: a line of code that returns a value

### Implicit return

```js
let implicitHello = (name) => "Hello " + name;
console.log(implicitHello("Anabel")); // Hello Anabel
```

```js
// This wont work because there is two statements
let add = (num1, num2) => {
  let sum = num1 + num2; // statement 1
  return sum; // statement 2
  // ? how could we get this expression down to one line -> num1 + num2
};

// We can however get it down to one statement
let implicitAdd = (num1, num2) => num1 + num2;
// * no need to create a variable to store the sum
```

### Return an object

- Using the grouping operator ()
- We can tell JavaScript, this is not a code block

```js
let returnObject = (name, rank, village) => ({ name, rank, village });

console.log(returnObject("Naruto", "Hokage", "Leaf Village")); // {name:'Naruto',rank: 'Hokage',village:'Leaf Village'}

console.log("<End of fat arrow function console.logs>");
```

## `POJO's` - Plain old JavaScript Objects

### What is an Object?

- Object is a value in memory which is referenced by an identifier
- Objects can be seen as a collection of properties.
  \*\* Property: An attribute, quality, or characteristic of something
- Object properties are equivalent to key-value pairs.
  ** Keys are either strings or symbols
  ** Values can be any type
- Most Diverse and Widely used Data type

### Why are objects so useful?

- O(1) access time
  \*\* Thats fast! - Well learn why in Module 2
- Used to create other data types
  ** Linked List
  ** Graphs
  ** Arrays
  ** Sets

### Objects are great for grouping related data together

- Lets creates some people objects!

What are some properties/keys a person would have?

- name
- age
- location
- favorite bands

Objects have key/values pairs

- Key : Value
- name : 'brandon'
- age : 27
- location : { city: "Tampa", state: "Florida" }
- favoriteBands : ["Joyce Manor", "Neck Deep", "Idles"]

### Create your own person object

```js
let brandon = {
  name: "brandon",
  age: 27,
  favoriteBands: ["Joyce Manor", "Neck Deep", "Idles"],
  location: {
    city: "Tampa",
    state: "Florida",
  },
  sayHello: function (name) {
    return "Hello " + name;
  },
};
```

### Lets access some properties of the brandon object

- in order to access the key, we will need the value
- can use either bracket or dot notation

#### Accessing name key

```js
console.log(brandon.name); //'brandon'
console.log(brandon["name"]); //'brandon'
```

#### Accessing age key

```js
console.log(brandon.age);
27;
console.log(brandon["age"]);
27;
```

#### Accessing favorite bands key

```js
console.log(brandon.favoriteBands);
["Joyce Manor", "Neck Deep", "Idles"];
console.log(brandon["favoriteBands"]);
["Joyce Manor", "Neck Deep", "Idles"];
```

#### Accessing location key

```js
console.log(brandon.location); { city: "Tampa", state: "Florida" }
console.log(brandon["location"]); { city: "Tampa", state: "Florida" }
```

#### Accessing nested locations key

```js
console.log(brandon.location); { city: "Tampa", state: "Florida" }
```

#### Can mix and match notations

```js
console.log(brandon.location.city);
Tampa;
console.log(brandon["location"]["city"]);
Tampa;
console.log(brandon.location["state"]);
Florida;
console.log(brandon["location"].state);
Florida;
```

### Accessing a method

- a method is just a function that belongs to an object
- the sayHello function belongs the brandon object
- the key is sayHello
- the value is the function

### We can access the function just like any other key:value pair

#### Can see the function object

```js
console.log(brandon.sayHello); // [Function];
```

#### Invoking the function

```js
console.log(brandon.sayHello("Anthony")); // Hello Anthony
```

#### Can do the same with bracket

```js
console.log(brandon["sayHello"]("Anthony")); // Hello Anthony
```

#### We can use bracket notation on methods we've been using

```js
let numbers = [1, 2, 3];
numbers.push(4);
numbers["push"](5);
console.log(numbers); // [1,2,3,4];
```

### Whats the difference between bracket and dot notation?

### Dot Notation

- Easier to read and write
- Cannot use variables as keys
- Limited on what we can key into
  - examples of what we cannot key into using dot notation:
    - object.first name
    - object.1key

### Bracket Notation

- You can use variables
- variables inside brackets are first evaluated then used to key into the object

```js
  - let variable = 'name';
    let object = { name: 'brandon' };

    console.log(object[variable]);// brandon
    console.log(variable);// name
    console.log(object['name']);// brandon
```

### Can be used to key into objects that dot notation is not able to

```js
-object["first name"] - object["1key"];
```

### Example

```js
let cat1 = {
  name: "pumpkin",
  age: 3,
  color: "orange",
  "1key": null,
  "is cute": true,
};
```

### Dot notation

- cannot use variables as keys

```js
let variable = "name";
console.log(cat1.variable); // undefined
```

- JS trying to find a key of variable in the cat1 object

### Bracket notation

```js
console.log(cat1[variable]); // pumpkin
// * Evaluates expression first
console.log(variable); // 'name';
console.log(cat1["name"]); // 'pumpkin'
```

### Dot notation

- cannot access certain keys

```js
 console.log(cat1.1key); //cant :(
```

- JS gets confused with the number
```js
 console.log(cat1.is cute); //cant :(

```

- JS gets confused with the space


## Takeaways?

### When to use which?

### Dot Notation
*  When you know what you're going to key into
* quicker to write

### Bracket Notation
* dealing with variables
* dealing with weird key names

### Both can be used to access and assign key value pairs
- We've shown accessing, lets show assigning


## Assigning values in a object

- You can assign the values using either notation
```js
object['key'] = value;
object.key = value;
```
## Reassigning

- When assigning/reassigning;
  If the key:value pair exists in the object
  - the key:value pair will be over written
    If the key:value pair does not exists in the object
  - the key:value pair will be created



### Assigning key:value pairs

### create object literal
```js
let car = {};

// Note the use of the assignment operator: =
// we are assigning the value at a specific key in a object to be a value

// assigning using dot notation
car.model = "challenger";

// assigning using bracket notation
car["year"] = "2016";

// assigning using bracket notation with a variable
let variable2 = "make";
car[variable2] = "dodge";

console.log(car); // { model:'challenger',year: 2016, make: 'dodge'};
```

### Reassigning existing value
- can use either bracket or dot

```js
// reassign model
car.model = "mustang";

// reassign year
car["year"] = "2023";

//reassign make
car.make = "ford";

console.log(car); //{ model:'mustang',year: 2023, make: 'ford'};

// assign nested object
car.stats = {};

// dot notation
car.stats.mpg = 16;
// bracket notation
car["stats"]["hp"] = 500;

console.log(car.stats); // { mpg: 16, hp: 500 };

// reassign nested object

// dot notation
car.stats.mpg = 21;
// bracket notation
car["stats"]["hp"] = 777;

console.log(car.stats); // { mpg: 21, hp: 777 };
```

### Deleting a value
- Use the delete operator
- Just provide object and key
  -  key:value pair will be deleted

```js
console.log("Before delete: ", car); //

// delete operator followed be object.key
delete car.make;

console.log("After delete: ", car); //
```

## `Plain Old JavaScript Object (POJO) Practice 45min(SOLO)`

- Plain-Old Javascript Header

## `Plain Old JavaScript Object (POJO) Practice Walkthrough`

- declare-key-values
- cat-builder
- print-names

## `Iterating through Objects`
  * Objects store unordered key:value pairs
  * Cannot rely on indices to access values
  * We will have to use different ways to access and keys and values in an object

* Well be covering
  * for in
  * Object.values
  * Object.keys
  * Object.entries

  *If we can can gain access to the key; we can gain access to the value*

## Examples
  * a people object with nested person objects

```js
let people = {
  person1: {
    name: "brandon",
  },
  person2: {
    name: "maica",
  },
  person3: {
    name: "charles",
  },
  person4: {
    name: "trevor",
  },
};

// * access a person we need a key
console.log(people.person1); // { name: 'brandon' }

// * access a different key get a different value
console.log(people.person2); // { name: 'anthony' }

// ? how can we dynamically get all the people
// * by iterating
```

## For in loop
* Can be used to get all the keys
* the variable after the let keyword is bananable
  * meaning you can name it anything
  * it will be the variable used to represent the key
* We can use this key variable to 'key' into the object to get the value
  * *Don't use for in loop with arrays/strings*
  * *Use only on objects*

## for in loop
  * key is bananable variable
```js
for (let key in people) {
  console.log("key:", key); // person1, person2, person3...
  console.log("value:", people[key]); // object1, object2...
  console.log("value:", people.key); // wont work
  // * cant use variables with dot notation

  // can key in further to get the name
  console.log(people[key].name); // brandon, anthony...

  // can store values in variables for readability
  let person = people[key]; // { name:'brandon' }
  let name = person.name; // brandon
}
```
* as we loop, the key changes; we can use the changing keys to get the values in the object

* we could loop or do this

```js
console.log(people.person1.name);
console.log(people.person2.name);
console.log(people.person3.name);
console.log(people.person4.name);
```
* * which is more dynamic?


### going back to the person object
```js
let brandon2 = {
  name: "brandon",
  age: 27,
  favoriteBands: ["Joyce Manor", "Neck Deep", "Idles"],
  location: {
    city: "Tampa",
    state: "Florida",
  },
  sayHello: function (name) {
    return "Hello " + name;
  },
};
```


## For in Loops
```js
for (let key in brandon2) {
  console.log("key:", key); // prints keys
  console.log("value:", brandon2[key]); // prints values
  // console.log('value:', brandon2.key); // wont work
  // * cant use dot notation with variables
}
```
## Object.keys
 * returns an array of keys

```js
let keyArray = Object.keys(show);
console.log(keyArray);

// * iterate through the array of keys to gain access to each individual key
// * then use that key to key into the object to get the value

for (let i = 0; i < keyArray.length; i++) {
  let key = keyArray[i];
  console.log(key); //
  console.log(show[key]); //
}
```

## Object.values
* returns an array of values
```js
let valueArray = Object.values(show);
console.log(valueArray); //
```

## Object.entries
* Object.entries
* returns a 2D Matrix of sub arrays with key as first index and value as the second index
```js
let entryArray = Object.entries(show);
console.log(entryArray);
console.log(show);
```

## `Iterating Through Objects Practice - 45min(SOLO)`

- Iterating Through Objects Header

## `Iterating Through Objects Practice Walkthrough`

- get-keys
- get-scores
- object-to-array-sum

## `Pojo Basics Project (Until EOD)`
