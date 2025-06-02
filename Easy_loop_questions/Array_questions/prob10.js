// 10.	10. Print only the negative numbers from an array. 

arr = [1, 2, 3, 4, 5, -2, -34, -45, -3];

for (i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    console.log(arr[i]);
  }
}