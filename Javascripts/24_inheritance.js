// หรือมันคือการสืบทอด  , oop ใช้กับ class

class Shape {
  name;
  x;
  y;

  constructor(x, y, name) {
    this.x = x;
    this.y = y;
    this.name = name;
  }
}

// extends class
class Circle extends Shape {
  constructor(x, y, name, radius) {
    super(x, y, name);
    this.radius = radius;
  }
  calculateArea() {
    return this.radius ** 2 * Math.PI;
  }
}

const circle1 = new Shape(0, 0, "Circle1");
console.log(circle1);

const circle2 = new Circle(0, 0, "Circle1", 7);
console.log(circle2);
// round up 2 decimal;
console.log(circle2.calculateArea().toFixed(2));
console.log("Area of this circle is" + " ", circle2.calculateArea());
console.log("Area of this circle is" + " ", circle2.calculateArea().toFixed(2));

// การเขียนอีกแบบนึง
class Circle2 extends Shape {
  constructor(name, radius) {
    // fixe ค่า x และ y
    super(0, 0, "Circle: " + name);
    this.radius = radius;
  }
  calculateArea() {
    return this.radius ** 2 * Math.PI;
  }
}
const circle3 = new Circle2("Tik", 9);
console.log(circle3.name);
console.log("Area of this circle is" + " ", circle3.calculateArea().toFixed(2));
