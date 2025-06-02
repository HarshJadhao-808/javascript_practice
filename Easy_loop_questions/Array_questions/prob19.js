// 19.	19. Sort an array in ascending order (without using sort method).  


arr=[2,23,43,234,23411,1,12,33]

for (let i=0;i<arr.length-1;i++ ){
    for(let j=0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
            let swapcap=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=swapcap;
        }
    }
}
console.log(arr);
