// 26.	26. Create an array of strings and print each string's length 

arr=["Harsh","Vivek","Mobeen","sachin","Uday"]

let total_len=0

for(let i=0;i<arr.length;i++){

    total_len += arr[i].length;
    console.log( "length of" , arr[i], "is - ",  arr[i].length);
    
}

console.log("Total length is",total_len);
console.log("Total length with comma's is",(total_len+(arr.length-1)));
