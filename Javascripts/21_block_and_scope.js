/* 
Global Scope
Local Scope
Block Scope
Lexical Scope
*/

// Global Scope
/* 
const a = 20;
function addAge1(student1, student2) {
  // local scope --> function
  var num1 = 5;
  const result = {
    age: student1.age + student2.age,
  };
  return result;
}
// global scope
if (1 > 0) {
  // local scope --> block scope
  var num2 = 9;
}
addAge1(1, 2);
// Global Scope
console.log(num1);
console.log(num2); */

/*
// global scope
function addAge(student1, student2) {
  // local scope --> function
  var num1 = 5;
  const num2 = 6;
  let num3 = 7;

  return 1;
} */

if (1 > 0) {
  var num1 = 5;
  const num2 = 6;
  let num3 = 7;
}

console.log(num1);
//console.log(num2);
//console.log(num3);

/* const ประกาศตัวแปรแบบคงที่ห้าม assign ค่าใหม่ ....
 แต่ถ้าเป็น reference สามารถเปลี่ยนค่าที่อยู่ในนั่นได้ */
// let ประกาศตัวแปรที่สามารถ assign ค่าใหม่ได้
/* ถ้า const กับ let อยู่ใน if else ไม่สามารถนำไป console log
  นอก block Scope นั้นได้ */
/* var สามารถประกาศใช้นอก if else ได้ ให้ระวังเรื่องความผิดพลาด */
/* ทั้ง const, let, var เมื่อประกาศอยู่ใน function ใดๆนจะไม่สามารถ
   ไปใช้นอก scope นั้นได้  */

// lexical scope ประกาศนอกเหนือจากภายนอกได้ ถ้ามีการประกาศตัวแปรภายนอก
// Global Scope
const num3 = 5;
function addABWithNum1(a, b) {
  // function scope
  return a + b + num3;
}
const result = addABWithNum1(1, 2);
console.log(result);
console.log(num3);
