// 23.	23. Rotate an array to the right by 1 position. 

let arr = [1, 2, 3, 4];
let last_el = arr[arr.length - 1];

for (i = arr.length - 1; i > 0; i--) {
  arr[i] = arr[i - 1];
}

arr[0] = last_el;

console.log(arr);



