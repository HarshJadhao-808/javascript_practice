let a = 3,
  b = 10,
  count = 0;
while (a <= b && b % 2 === 0) {
  if (a * 2 > b || b - a < 5) {
    count++;
  }
  a++;
  b--;
}
console.log(count);


// as while loop will never be true then count will be printed which is zero
