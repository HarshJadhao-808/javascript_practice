// 10.	10. Take a number and print its reverse (e.g. 123 → 321).

let a=123;
let b=a.toString();
let rev="";


for(i=b.length-1;i>=0;i--){
rev += b[i];
}

console.log(rev);
