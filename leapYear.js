//
//  Leap Year Warmup Exercise

function isLeapYear ( year = prompt("Please enter Leap Year") ) {
    let result

    if (year%4 == 0  && year%100 != 0 ) {
        return  result = year +" is not a leap year, it should return false";
    }else if ( year%4 == 0  && year%100 == 0  && year%400 == 0) {
        return result = year +" is not a leap year, it should return true";
    }else{ return result = year +" is not a leap year, it should return false"}

    console.log(result);

}


isLeapYear();