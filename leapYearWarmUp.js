const isLeapYear = function (){
    let year = prompt('Please enter the year to be checked: ');
    if((year % 100 !== 0 || year % 400 == 0) && year % 4 === 0){
        return true;
    }
    else {
        return false;
    }
};


isLeapYear();