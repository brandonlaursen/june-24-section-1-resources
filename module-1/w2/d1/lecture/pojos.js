/*

  What is an Object?
  * Object is a value in memory which is referenced by an identifier
  * Objects can be seen as a collection of properties.
    ** Property: An attribute, quality, or characteristic of something
  * Object properties are equivalent to key-value pairs.
    ** Keys are either strings or symbols
    ** Values can be any type
  * Most Diverse and Widely used Data type

  Why are objects so useful?
  * O(1) access time
    ** Thats fast! - Well learn why in Module 2
  * Used to create other data types
    ** Linked List
    ** Graphs
    ** Arrays
    ** Sets

*/


/*

  Objects are great for grouping related data together

  * Lets creates some people objects!

  What are some properties/keys a person would have?
    * name
    * age
    * location
    * favorite bands

  * Key : Value
    name : 'brandon'
    age : 27
    favoriteBands : ["Joyce Manor", "Neck Deep", "Idles"]
    location : { city: "Tampa", state: "Florida" }


*/

let brandon = {
  name: 'brandon',
  age: 28,
  favoriteBands: ["Joyce Manor", "Neck Deep", "Idles"],
  location: { city: "Tampa", state: "Florida" },
  sayHello: function(name) {
    return `Hello ` + name
   }
};

// console.log(brandon);
// dot notation vs bracket

// console.log(brandon.name);// 'brandon
// console.log(brandon['name']);// brandon


// console.log(brandon.age);
// console.log(brandon['age']);

// console.log(brandon.favoriteBands);// [ 'Joyce Manor', 'Neck Deep', 'Idles' ]
// console.log(brandon.favoriteBands[0]);// Joyce Manor

// console.log(brandon.location);// { city: 'Tampa', state: 'Florida' }
// console.log(brandon.location.state);// Florida
// console.log(brandon['location'].state);// Florida


// console.log(brandon.sayHello);// [Function: sayHello]
// console.log(brandon.sayHello('maica'));// Hello maica



let cat = {
  name: 'pumpkin',
  age: 3,
  color: 'orange',
  '1key': null,
  'is cute': true,
  ' ': 'empty string'
};

// console.log(cat.name);// pumpkin

// console.log(cat.1key);//
// console.log(cat.'1key');
// console.log(cat['1key']);// null

// console.log(cat.is cute);
// console.log(cat['is cute']);// true

// console.log(cat[' ']);// empty string

let variable = 'name';

// cat['variable']
// console.log(cat.variable);// undefined

// console.log(cat['name']);// pumpkin
// console.log(cat[variable]);// pumpkin

/*

  Whats the difference between bracket and dot notation?

  Dot Notation
    * Easier to read and write
    ! Cannot use variables as keys
    ! Limited on what we can key into
      * examples of what we cannot key into using dot notation:
        - object.first name
        - object.1key

  Bracket Notation
    * You can use variables
    * variables inside brackets are first evaluated then used to key into the object
      - let variable = 'name';
        let object = { name: 'brandon' };

        console.log(object[variable]);// brandon
        console.log(variable);// name
        console.log(object['name']);// brandon

    * can be used to key into objects that dot notation is not able to
      - object["first name"]
      - object["1key"]


*/


/*

  Assigning values in a object
  * You can assign the values using either notation
    ** object['key'] = value;
    ** object.key = value;

  Reassigning
  * When assigning/reassigning;
    If the key:value pair exists in the object
     * the key:value pair will be over written
    If the key:value pair does not exists in the object
     * the key:value pair will be created

*/

let car = {
  cOLORr:'red',
  'key': 'value'
};


car.name = 'challenger';
car.year = 2015;
car['milage'] = '15mpg'

// car.year = 2025;
// console.log(car);
// console.log(car.color);// red
// console.log(car['color']);// red


// delete operator
// { key: 'value', name: 'challenger', year: 2015, milage: '15mpg' }
// console.log(car);
// delete car.color;
console.log(car.cOLORr);//
car.color = car.cOLORr;
delete car.cOLORr;
console.log(car);
// console.log(car.color);// undefined
