// asynchronous บรรทัดที่ 1 - 10 ซึ่งบางที บรรทัดที่ 5 มันทำงานช้า ..... มันคือการข้ามไป 6-7-8 ไปได้เลย
/*
function verylongTime() {
    
}
*/

// มันจะต้องรออีก 3 วิ มันถึงจะทำงาน
/*
function log(num) {
  console.log(1);
}

setTimeout(log, 3000); 
*/

//////////////////////////////////////////////////
function log() {
  console.log(1);
}

function veryLongTime() {
  setTimeout(log, 3000);
}
veryLongTime();
console.log(2);

////////////////////////////////////////////////////////////

/* 
function getA() {
  return "A";
}
const getA2 = () => {
  return "A";
};*/
