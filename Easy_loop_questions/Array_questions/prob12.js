// 12.	12. Remove duplicate elements from an array (without using Set).


let arr=[2,3,4,2,1,4,4,5,34,25,32,4,324];
let new_arr=[];


for(let i = 0;i<arr.length;i++){
    let a = false;
    for(let j =0;j<new_arr.length;j++){
        if(arr[i]===new_arr[j]){
            a = true;
            break;
        }
    }
    if (!a) {
      new_arr.push(arr[i])
    }
}

console.log(new_arr);