// 30.	30. Split an array into two halves.

let arr=[2,2,4,23,23,4,56,34,34,6,78,99,76,8]
let first_half=[]
let second_half=[]
for (let i=0;i<arr.length/2;i++){
   first_half[first_half.length]=arr[i]
}
for (let i=(arr.length/2);i<arr.length;i++){
    second_half[second_half.length]=arr[i]
}
console.log(first_half);
console.log(second_half);
