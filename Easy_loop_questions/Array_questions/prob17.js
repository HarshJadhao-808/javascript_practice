// 17.	17. Find the common elements between two arrays.

let arr_1 = [2, 32, 25, 34, 1, 6];
let arr_2 = [2, 3, 1, 23, 25, 22, 32323, 32];
let common_arr = [];
let common_arr_index = 0;
for (let i = 0; i < arr_1.length; i++) {
  for (let j = 0; j < arr_2.length; j++) {
    if (arr_1[i] === arr_2[j]) {
      common_arr[common_arr_index] = arr_2[j];
      common_arr_index++;
    }
  }
}

console.log("The common elements found are :", common_arr);
