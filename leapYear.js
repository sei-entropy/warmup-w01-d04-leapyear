

//1
const leapYear = function (year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
        return false;
    }
    return true;
  }
    return false;
};
//2
const leapYear = function (year) {
  // if ((year % 4 === 0) && (year % 100 === 0) || (year % 400 === 0)) {
  //   return true;
  // }
  // return false;
  return ((year % 4 === 0) && (year % 100 === 0) || (year % 400 === 0));
};

// console.log(leapYear(1997)); //not a leap year
// console.log(leapYear(1996)); //is a leap year
// console.log(leapYear(1900)); //not a leap year
// console.log(leapYear(2000)); //is a leap year
console.log(leapYear(prompt('Enter year')));