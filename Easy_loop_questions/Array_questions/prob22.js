// 22.	22. Replace all negative numbers in an array with 0.

let arr = [34, 234, 6, 7, 2, 34, -23, -34, -234, -123];

for (i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    arr[i] = 0;
  }
}

console.log(arr);
