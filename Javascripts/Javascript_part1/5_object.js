const Person = {
  name: "John Tik",
  age: 34,
  position: "Front End Developer",
};
console.log(Person);

// ประกาศตัวแปร
let person = {
  name: "John Tik",
  age: 34,
  height: 172,
  weight: 77,
  cid: "1319900113280",
};
console.log(person);
console.log(person.cid);
console.log(typeof person);

let JohnTikName = person.name;
let JohnTikName2 = person["name"];
console.log(JohnTikName);
console.log(JohnTikName2);
