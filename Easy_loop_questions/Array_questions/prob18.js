// 18.	18. Find the difference of elements between two arrays (elements that are in one but not the other).

let arr_1 = [34, 23, 54, 2, 12, 122, 90, 34, 2323, 33];
let arr_2 = [64, 23, 54, 2, 12, 15, 20];
let l_arr_1_count = 0;
let l_arr_2_count = 0;
let largest_arr = [];
let smallest_arr = [];
for (let l_arr_1 = 0; l_arr_1 < arr_1.length; l_arr_1++) {
  l_arr_1_count++;
}
for (let l_arr_2 = 0; l_arr_2 < arr_2.length; l_arr_2++) {
  l_arr_2_count++;
}
if (l_arr_1_count > l_arr_2_count) {
  largest_arr = arr_1;
  smallest_arr = arr_2;
} else {
  largest_arr = arr_2;
  smallest_arr = arr_1;
}

for (let i = 0; i < largest_arr.length; i++) {


  for (let j = 0; j < smallest_arr.length; j++) {
    if(largest_arr[i]!==smallest_arr[j]){
        console.log(largest_arr[i],"is a unique element that are in 1st array and not in 2nd");
        break;
    }

  }
}

for (i=0;i<smallest_arr.length;i++){
    for(j=0;j<largest_arr.length;j++){
        if(smallest_arr[i]!==largest_arr[j]){
            console.log(smallest_arr[i],"is a unique element from 2nd array and is not in 1st");
            break;
        }
    }
}