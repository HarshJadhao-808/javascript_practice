// 27.	27. Check if an array is sorted in ascending order.

let arr=[1,2,3,4,5,6,6,7,8,9,10]
let counter =0
for(i=0;i<arr.length-1;i++){
    if(arr[i]>arr[i+1]){
        console.log("Array is not sorted in ascending order");
        break;
        
    }
    counter ++
}

if(counter==arr.length-1){
    console.log("Array is sorted in ascending order");
    
}