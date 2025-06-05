// 21.	21. Print all elements that are greater than the average of the array.

let arr = [2, 34, 4, 45, 55, 656, 556, 3434, 4, 345, 6, 4, 37, 8];

function average(arr){
    let sum=0;
    let no_of_elements=0
    for(i=0;i<arr.length;i++){
        sum += arr[i]
        no_of_elements ++
    }
    return (sum/no_of_elements)
}
let avg = average(arr);

for(i=0;i<arr.length;i++){
if(arr[i]>avg){
    console.log(arr[i],"is greater than average of the whole array");
    
}
}