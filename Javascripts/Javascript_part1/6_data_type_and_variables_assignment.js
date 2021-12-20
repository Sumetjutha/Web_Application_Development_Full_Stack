// โจทย์ให้ประกาศตัวแปรที่เก็บค่าต่อไปนี้ให้เหมาะสมกับชนิดของข้อมูล

// เงิน 50 บาท
let money = 50;
console.log(money);

// เงินในกระเป๋า จำนวน 593.50 บาท
let walletBalance = 593.5;
console.log(walletBalance);

// ชื่อของหนังสือ ที่ช่อ Harry Potter
let book = "Harry Potter";
console.log(book);

// เลขบัตรสมาชิกห้องสมุด 1930531201006
let library_memberID = "1930531201006";
console.log("Library member id is", library_memberID);

// สินค้า หน้าจอคอม รุ่น U271203 ราคา 15839
let product1 = {
  type: "monitor",
  series: "U271203",
  price: 15839,
};
console.log("Product is ", product1);

// นักเรียนA ที่ชื่อ John Tik อายุ 34 ปี เพศชาย
let studentA = {
  name: "John Tik",
  age: 34,
  sex: "male",
};
console.log("StudentA is ", studentA);

// นักเรียนB ที่ชื่อ Javascript อายุ 100 ปี เพศไม่ระบุ
let studentB = {
  name: "Javascripts",
  age: 100,
  sex: null,
};
console.log("StudentB is ", studentB);

// ห้องเรียนชื่อ Mern Course ที่มี นักเรียน 2 คน คือ นักเรียน A, นักเรียน B
let classroom = {
  name: "Mern Course",
  student: [studentA, studentB],
};
console.log("Classroom is", classroom);
