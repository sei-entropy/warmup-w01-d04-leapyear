const isLeapYear= function(year){
    if(year % 100 == 0 && year % 400 !== 0 ){
        console.log(false);
    } 
    else if(year % 4 == 0 ){
        console.log(true);
    }
    else if(year % 400 == 0 ){
        console.log(true);
    }
    else{
        console.log(false);
    }
}