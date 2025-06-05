// 28.	28. Find the frequency of each element in an array.

let arr = [4, 24, 3, 34, 3, 3, 4, 4, 4, 4, 2, 1123, 2, 1, 5];
let frequency = {};

for (i = 0; i < arr.length; i++) {
    if(frequency[arr[i]]==undefined){
        frequency[arr[i]]=1
    }
    else{
        frequency[arr[i]]++
    }
}
console.log(frequency);

// console.log("Frequency of ", arr[i], "is :", counter);
