// 12.	12. Calculate the sum of digits of a number (e.g. 123 → 6).

let a = 123;
let b=a.toString();
let sum = 0;

for (i = 0; i < b.length; i++) {
  sum += parseInt(b[i]);
}
console.log("sum of", a, "is", sum);



// Parseint(character)  will convert character to number if it can be converted