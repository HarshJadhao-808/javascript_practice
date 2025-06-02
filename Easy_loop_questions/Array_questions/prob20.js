// 20.	20. Sort an array in descending order (without using sort method).

arr = [34, 234, 22, 32, 1, 2, 5, 2, 135, 3, 212];

for (i = 0; i < arr.length - 1; i++) {
  for (j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] < arr[j + 1]) {
      let swapcap = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = swapcap;
    }
  }
}
console.log(arr);

