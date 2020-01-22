const isLeapYear=function(year){
    if(year%4===0 && year%100===0 && year%400===0 ){
        return true;
    }else if (year%4===0 && year%100!==0){
        return true;
    }else{
        return false;
    }
};

const isLeapYear=function(){
    year=prompt("Please enter the year");
    if(year%4===0 && year%100===0 && year%400===0 ){
        return true;
    }else if (year%4===0 && year%100!==0){
        return true;
    }else{
        return false;
    }
};