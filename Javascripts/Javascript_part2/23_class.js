// สำคัญกับการเชียน oop มากๆ

/* 
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
}
*/

const a = {
  name: "",
  age: 12,
};
const b = {
  name: "",
  age: 12,
};
const c = {
  name: "",
  age: 12,
};

////////////////////////////////////////////////////////////////

class Student {
  // attribute
  name;
  age;
  title;

  // constructor
  constructor(title, name, age) {
    this.title = title;
    this.name = name;
    this.age = age;
  }

  // method
  getGreetingText() {
    return (
      "Hello" +
      " " +
      this.title +
      "." +
      this.name +
      " " +
      "your age is" +
      " " +
      this.age +
      "."
    );
  }
}
const student_1 = new Student("Mr", "John Tik", 34);
console.log(student_1);
console.log(typeof student_1);
console.log(student_1 instanceof Student);

const student_2 = { title: "Mr", name: "John Tik", age: 34 };
console.log(student_2 instanceof Student);

// Method
console.log(student_1.getGreetingText());

////////////////////////////////////////////////////////////////
