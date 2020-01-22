const leapYear= function(num){
if(num%4===0){
if(num%100!==0){
    return('true');
}else if(num%400===0){
    return('true');
}else return('false');
 } else
    return('false');
};

var person = prompt("Please enter your number to test", "");

if (person != null) {
    leapYear(person);
}