class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(
      `Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`
    );
  }

  static introducePeople(people) {
    if (!Array.isArray(people)) {
      throw new Error("introducePeople only takes an array as an argument.");
      return;
    }

    people.forEach((person) => {
      if (!(person instanceof Person)) {
        throw new Error("All items in array must be Person class instances.");
      };

      console.log(person.introduce());
    });
  }
}

const person = new Person("kristen", "chauncey", 38);
// const person2 = new Person("brandon", "laursen", 28);

// console.log(Person.introducePeople(["dog", person]));

// console.log(person);// Person { firstName: 'kristen', lastName: 'chauncey', age: 38 }

// console.log(person2.introduce())

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
