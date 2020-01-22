const isLeapYear = function (year) {
    if (year % 4 === 0 && year % 100 !== 0) { 
        return true;

    } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        return true;

    } else return false;
}


// one line method
// const isLeapYear2 = (year) => ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);



// bonus 
// const isLeapYear = function (year = prompt("please enter a Year")) {
//     if (year % 4 === 0 && year % 100 !== 0) { 
//         return true;

//     } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
//         return true;

//     } else return false;
// }



console.log(isLeapYear(1990))
console.log(isLeapYear(1996))
console.log(isLeapYear2(1997))
console.log(isLeapYear2(2000))