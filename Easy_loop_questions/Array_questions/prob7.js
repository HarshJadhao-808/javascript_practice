// 7.	7. Create a new array that stores squares of all elements from another array.

let a = [1, 2, 3, 4, 5];
let b=[];

for(i=0;i<a.length;i++){
    b.push(a[i] * a[i]);
}
console.log(b);
