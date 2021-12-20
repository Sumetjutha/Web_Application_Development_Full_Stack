/* 
Number
String
Boolean
Object
JSON
Math
Date
*/

let a = "1";

// Number
const num = Number("1");
console.log(num, typeof num);

// String
const b = String(123);
console.log(b, typeof b);

// Boolean
const c = Boolean("5");
console.log(c, typeof c);

const d = Boolean(0);
console.log(d, typeof d);

const e = Boolean(undefined);
console.log(e, typeof e);

const f = Boolean(null);
console.log(f, typeof f);

const g = {};
console.log(Boolean(g), typeof g);

const h = [];
console.log(Boolean(h), typeof h);

// Object
// JSON
const i = {
  name: "John Tik",
};
console.log(JSON.stringify(i));
console.log(JSON.stringify(i), i);

const j = JSON.stringify(i);
console.log(JSON.parse(j));

// Math
const k = Math.PI;
console.log(k);

const r = 7;
const area = 3.14 * r ** 2;
const area1 = Math.PI * r ** 2;
console.log(area);
console.log(area1);
console.log(Math.round(area1));
console.log(Math.ceil(area1));
console.log(Math.floor(area1));

// Date
const d1 = new Date();
console.log(d1);

const d2 = new Date();
console.log(d2.getDay());
