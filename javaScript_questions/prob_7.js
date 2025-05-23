let marks=30;
let name="Harsh";

if(marks>=40 && marks<100){
    console.log("congratulation",name,"you are passed with",marks,"out of 100")
}
else if(marks<40 && marks>0 && marks>20){
    console.log("Oh so sorry ",name,"you are failed because you scored",marks,"which are less than the passing marks")
}

else if(marks<20 && marks>0){
    console.log("Oh so sorry ",name,"you are failed because you scored",marks,"which are very less than the passing marks , you really need to improve your study")
}

else if( marks==0){
console.log("Oh so sorry ",name,"you are failed because you scored",marks,"which are really unexpected marks , you really need to improve your study a lot")
}

else if(marks>100){
    console.log("!OOPS  ITS SEEMS YOU ENTERED WRONG MARKS IT CANNOT EXCEED 100")
}

else{
    console.log("!OOPS  ITS SEEMS YOU ENTERED WRONG MARKS IT CANNOT BE A NEGATIVE INTEGER")
}