// 5.	5. Count how many even numbers are in an array.

let arr = [1, 2, 3, 4, 5,6,7,8];
let count=0
for (i = 0; i < arr.length; i++) {
  if(arr[i]%2==0){
    count ++
  }
}
console.log(count);
