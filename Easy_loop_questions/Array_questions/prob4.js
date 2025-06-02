let arr=[34,45,2,34,356,3,4];
let b=arr[0];

for(i=0;i<arr.length;i++){
    if(arr[i]<b){
        b=arr[i]
    }
}
console.log(b);
