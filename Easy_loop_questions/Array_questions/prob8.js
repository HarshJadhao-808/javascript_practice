// Reverse the elements of an array (without using reverse method).

let arr = [1, 2, 3, 4, 5];
let rev=[];

for (i=arr.length-1;i>=0;i--){
    rev.push(arr[i]);
}
console.log(rev);

// let arr=[1,2,3,4,5];
// let rev=[];
// for(i=0;i<arr.length;i++){
//     rev.shift(arr[i]);
// }
// console.log(rev);


// Why is it not possible with .shift method?