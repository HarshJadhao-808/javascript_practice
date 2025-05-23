let a=19;

if(a%4==0 && a%6==0){
    console.log(a,"is divisible by both 4 and 6")
}


else if (a % 4 == 0 && a % 6 != 0) {
  console.log(a, "is only divisible by 4 and not 6");
}  

else if (a % 4 != 0 && a % 6 == 0) {
  console.log(a, "is only divisible by 6 and not 4");
}

else {
  console.log(a, "is not divisible by both 4 and 6");
}