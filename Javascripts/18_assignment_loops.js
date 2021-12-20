// อยากจะให้หาตัวเลขที่มากที่สุดใน array
const a = [2, 34424, -23, 123, 233];

// logic
let maxNumber = a[0];
for (let i = 0; i < a.length; i++) {
  console.log(a[i], maxNumber);
  if (a[i] > maxNumber) {
    maxNumber = a[i];
  }
  result = maxNumber;
}
console.log(result);

//////////////////////////////////////////
let minNumber = a[0];
for (let i = 0; i < a.length; i++) {
  console.log(a[i], minNumber);
  if (a[i] < minNumber) {
    minNumber = a[i];
  }
  result = minNumber;
}
console.log(result);
