const a = 1;
let b = a;
b = 5;
console.log(a);
console.log(b);

// object
const c = [1, 2, 3];
let d = c;
d[1] = 999;
console.log(c);
console.log(d);

//////////////////////////
const e = [1, 2, 3];
// copy array, copy object
let f = [...e];
f[1] = 999;
console.log("e: >>", e);
console.log("f: >>", f);

///////////////////////////
const g = {
  name: "John Tik",
};
const h = g;
h.name = "Javascript";
console.log("g: >>", g);
console.log("h: >>", h);

////////////////////
const i = {
  name: "John Tik",
};
const j = { ...i };
j.name = "Javascript";
console.log("i: >>", i);
console.log("j: >>", j);
///////////////////

const k = {
  name: "John Tik",
};
k.name = "Sumet Jutajan";
console.log("k: >>", k);

///////////////////////////////
function add(a, b) {
  return a + b;
}
const sum = add(10, 20);
console.log("sum: >>", sum);

////////////////////////////////////
function addAge(student1, student2) {
  const result = student1;
  result.age = student1.age + student2.age;
  return result;
}
const l = {
  age: 10,
};
const m = {
  age: 30,
};
const sum1 = addAge(l, m);
console.log("sum1: >>", sum1);
console.log(l, m);
//////////////////////////////////

function addAge2(student1, student2) {
  const result = {
    age: student1.age + student2.age,
  };
  return result;
}
const n = {
  age: 10,
};
const o = {
  age: 30,
};
const sum2 = addAge2(n, o);
console.log("sum2: >>", sum2);
console.log(n, o);
