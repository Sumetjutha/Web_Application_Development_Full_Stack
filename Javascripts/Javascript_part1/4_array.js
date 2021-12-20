/* const exampleArrayA = [1, 2, 3, 4];

const exampleArrayB = ["1", "2", "3", "4"];

const exampleArrayC = [1, "1", true]; */

let circles = ["green-circle", "red-circle", "blue-circle", "black-circle"];
console.log(circles[2]);
console.log(circles);
console.table(circles);

// แก้ไขข้อมูลในอาร์เรย์
circles[1] = "John Tik";
console.table(circles);

// เพิ่มข้อมูล
circles.push("Javascripts");
const num1 = 50;
circles.push(num1);
console.table(circles);

// ลบข้อมูล
circles.pop();
circles.pop();
console.table(circles);

circles[1] = null;
console.table(circles);
