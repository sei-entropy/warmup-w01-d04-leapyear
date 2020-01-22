const isLeapYear = function(year) {
  if (year % 400 === 0) {
    console.log("It's a leap year");
  } else {
    console.log("It's not a leap year");
  }
};

//
const isLeapYear = function(year) {
  if (year % 4 === 0) {
    return true;
    if (year % 100 === 0) {
      return true;
      if (year % 400 === 0) {
        console.log("It's a leap year");
        return true;
      }
    }
  } else {
    console.log("It's not a leap year");
    return false;
  }
};

//|| year % 100 === 0 || year % 4 === 0
