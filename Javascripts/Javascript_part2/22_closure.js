/*
Closure is the combination of a function 
and a closure the lexical environment 
within which that function was declared
*/
////////////////////////////////////////////////////////////////////////////
// ประกาศฟังก์ชัน
function getPrintName() {
  // ประกาศตัวแปร
  const name = "John Tik";
  // return ค่าออกมา
  return name;
}
//ประกาศตัวแปรอีกตัวนึงขึ้นมา เพื่อรับฟังก์ชันอันบนมาใส่ในตัวแปร
const fn1 = getPrintName;

// ลองแสดงค่าออกมาดู เช็คชนิดของตัวแปร
console.log(typeof getPrintName);

// ลองแสดงค่าออกมาดู เช็คชนิดของตัวแปร
console.log(typeof fn1);

// ลองดูว่า fn1 มันทำงานอย่างไร
console.log(fn1());
/////////////////////////////////////////////////////////////////////////
// ประกาศฟังก์ชันอีก 1 รูปแบบต่างจากอันบน
function getPrintName2() {
  // ประกาศตัวแปร
  const name2 = "John Tik";
  function printName() {
    console.log(name2);
  }
  // return ค่าออกมา
  return name2;
}
//ประกาศตัวแปรอีกตัวนึงขึ้นมา เพื่อรับฟังก์ชันอันบนมาใส่ในตัวแปร
const fn2 = getPrintName2();

// ลองแสดงค่าออกมาดู เช็คชนิดของตัวแปร
console.log(typeof getPrintName2);

// ลองแสดงค่าออกมาดู เช็คชนิดของตัวแปร
console.log(typeof fn2);

// ลองดูว่า fn1 มันทำงานอย่างไร
console.log(fn2);

fn1;
fn2;

