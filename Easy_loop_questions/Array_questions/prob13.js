// 13.	13. Check if a given element exists in an array or not.


arr=[23,34,23,4,34,234,,234,234,]

a=23

for(let i=0;i<arr.length;i++){
  if(arr[i]==a){
    console.log(a," was found on",i+"th","index of the array");
    break;
  }
}