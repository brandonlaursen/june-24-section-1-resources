const Employee = require('./employee');

// console.log(Employee);

const john = new Employee('John Wick','Dog Lover');


// setTimeout(john.sayName, 2000);


// setTimeout(() => john.sayName(), 2000);






let sayNameBound = john.sayName.bind(john);

// sayNameBound();


setTimeout(sayNameBound, 2000);
