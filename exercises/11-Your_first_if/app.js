var total = prompt('How many km are left to go?');


function kilometros(total){

if (i>=100){
    document.write("We still have a bit of driving left to go?");
}else if (i>=50 && i<=100){
    document.write("We'll be there in 5 minutes");
}else{
    document.write("I'm parking, I see you right now");
}
return kilometros();
}
console.log(total);
