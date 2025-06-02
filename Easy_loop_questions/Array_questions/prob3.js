// 3.	3. Find the maximum number in an array.

let a= [1,2,3,4,5]
let b=a[0]

for(i=0;i<a.length;i++){
    if(a[i]>b){
        b=a[i]
    }
}
console.log(b);
