// 14.	14. Count how many times a particular number appears in an array.

let arr = [2.43, 345, 3, 4, 34, 4, 3, 2, 3, 2, 4, 3, 4, 45];

let a = 3;
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == a) {
    count++  
}
}
console.log(a,"was found",count,"times in the array");
