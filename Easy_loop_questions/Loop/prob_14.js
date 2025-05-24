// 14.	14. Check if a number is prime using a loop.


n=5

for(i=1;i<=n*n;i++){
    if(i==1 || i==n){

        continue;
    }
        if(n%i==0){
        console.log(n,"is not a prime number The first divider found is ",i);
        break;
    }
      if(i==n*n){
        console.log(n,"is a prime number");
        
    
}
}

// contuinue is used to skip 1 and number itself 