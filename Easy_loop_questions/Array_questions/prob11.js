// 11.	11. Find the second largest number in an array.

let arr = [1, 2, 3, 24, 25];
let greatest = arr[0];
let second_greatest = arr[0];

for (i = 0; i < arr.length - 1; i++) {
  for (j = 0; j < arr.length - i - 1; j++) {
    // swap algorithm

    if (arr[j] > arr[j + 1]) {
      let swapcap = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = swapcap;
    }
  }
}

for (i = 0; i < arr.length; i++) {
  second_greatest = greatest;
  if (arr[i] > greatest) {
    greatest = arr[i];
  }
}

console.log("Greatest number is :", greatest);
console.log("Second greatest number is :", second_greatest);
