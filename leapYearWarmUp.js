const isLeapYear = function (){
    let year = prompt('Please enter the year to be checked: ');
    if(year % 4 === 0 || year % 100 === 0 || year % 400 === 0){
        return true;
    }
    else {
        return false;
    }
};


isLeapYear();