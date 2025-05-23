let a=13313;
let b= a.toString();
let rev=("");

for(i=b.length-1;i>=0;i--){
    rev += b[i];
}
if(rev==b){
    console.log(a,"is a palindrome number")
}

else{
    console.log(a,"is not a palindrome number")
}
