// 15.	15. Swap the first and last element of an array.

let arr = [3, 2, 3, 223, 2, 3, 3, 23, 23, 90];
let swapcap=arr[0];
let last_index = arr.length - 1;
console.log(arr);
for (i = 0; i < arr.length; i++) {
  if (arr[i] = arr[0]) {
    arr[i] = arr[last_index];
    
  }
  if (arr[i] = arr[last_index]) {
    arr[last_index] = swapcap;
  }
}

console.log(arr);
