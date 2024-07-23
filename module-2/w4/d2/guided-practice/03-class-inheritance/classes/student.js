const Person = require("./person");

class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);

    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(student1, student2) {
    // console.log(student1, student2);
    if (student1.GPA > student2.GPA) {
      return `${student1.firstName} ${student1.lastName} has the higher GPA.`;
    } else if (student1.GPA < student2.GPA) {
      return `${student2.firstName} ${student2.lastName} has the higher GPA.`;
    } else {
      // console.log("Both students have the same GPA");
      return "Both students have the same GPA"
    }
  }
}

// let student1 = new Student("billy", "johnson", "software-development", 4.2);

// let student2 = new Student("sarah", "smith", "basket-weaving", 4.2);

// console.log(Student.compareGPA(student1, student2));
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
