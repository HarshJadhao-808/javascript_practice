// 24.	24. Rotate an array to the left by 1 position.

let arr = [3, 4, 65, 6, 4, 3, 9];

first_el = arr[0];

for (i = 0;i<arr.length-1; i++) {
  arr[i] = arr[i + 1];
}
arr[arr.length - 1] = first_el;

console.log(arr);
