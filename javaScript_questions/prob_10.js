let a=34554;
let b=a.toString();
let l=b.length-1;
let rev="";
while(l>=0){
    
    rev += b[l];
    l--
}
console.log(rev)



// error occured :- undefined before reverse number
//       solution:- l= b.length -1  as last index is always length-1

// flaw:- it cannot work for lengthy decimal