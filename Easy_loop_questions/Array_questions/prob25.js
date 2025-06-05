// 25.	25. Find the sum of even numbers and sum of odd numbers in an array.


let arr=[23,343,23,4,3,23,43,24,3,24,2,34]

let odd_sum=0

let even_sum=0

for (i=0;i<arr.length;i++){
    if(arr[i]%2==0)[
        even_sum += arr[i]
    ]
    odd_sum += arr[i]
}

console.log("Sum of even numbers in this array is",even_sum);
console.log("Sum of odd numbers in this array is",odd_sum);
