// 16.	16. Merge two arrays into one.

let arr_1 = [1, 2, 3, 4, 5];
let arr_2 = [6, 7, 8, 9, 10];
let final_arr = [];

for (i = 0; i < arr_1.length; i++) {
  final_arr[i] = arr_1[i];
}

for (j = 0; j < arr_2.length; j++) {
  final_arr[i+j] = arr_2[j];
}

console.log(final_arr);
