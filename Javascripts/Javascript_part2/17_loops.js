/* 
for (statement 1; statement 2; statement 3) {
    // do something
}

for (variable of iterables) {
    // do something
}

for (key in object) {
    // do something
}
*/

/* 
while (condition) {
    // do something
}
*/
i = 0;
for (let i = 0; i < 10; i = i + 1) {
  console.log("i : >>>", i);
}
console.log("end");

j = 0;
for (let j = 0; j <= 10; j = j + 1) {
  console.log("j : >>>", j);
}
console.log("end");

// ประยุกต์ใช้กับ if else
for (let k = 0; k <= 10; k = k + 1) {
  if (k % 2 === 0) {
    console.log("k : >>>", k);
  }
}
console.log("end");

for (let l = 0; l <= 10; l = l + 1) {
  for (let m = 0; m <= 5; m = m + 1) {
    console.log("l : <<<", l, "m : <<<", m);
  }
}
console.log("end");

////////////////////////////////////////////////////////////////////////
for (let n = 0; n <= 10; n = n + 1) {
  for (let p = 0; p <= 5; p = p + 1) {
    if (n % 2 === 0 && p % 2 === 0) console.log("n : <<<", n, "p : <<<", p);
  }
}
console.log("end");

// use with array
const numbers = ["a", "b", "c"];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
console.log("end");

for (str of numbers) {
  console.log(str);
}
console.log("end");

////////////////////////////////////////////////////////////////
const student = {
  name: "John Tik",
  age: 34,
  firstName: "John",
};
const keys = Object.keys(student);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log(student[key]);
}
console.log(keys);
console.log("end");

/////////////////////////////////////////////////////////////////////////////
for (aaa in student) {
  console.log(student[aaa]);
}
console.log("end");

// While loop
let x = 0;
while (x <= 10) {
  console.log(x);
  // logic ....................................................................
  x = x + 1;
}

let y = 15;
while (y != 10) {
  console.log(y);
  // logic ....................................................................
  if (y > 10) {
    y = y - 1;
  } else if (y < 10) {
    y = y + 1;
  }
}
