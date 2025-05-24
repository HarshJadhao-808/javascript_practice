let a = 6;

let b = a - 1;

let factorial = " ";

let space="\t";

if (a == 0) {
  console.log("WoW that's 0 and it has an exception its factorial is = !1");
}
if (a < 0) {
  console.log("!oh sorry it seems you have put some negative integer");
}
if (a == 1) {
  b--;

  console.log("WoW that's 1 and it has an exception its factorial is = !1");
}

while (a >= 0 && b > 0) {
  let d = ("!");
  a--;
  d += a;
  d += space;
  factorial += d;
  b--;
}
if (b == 0) {
  console.log(factorial);
}
