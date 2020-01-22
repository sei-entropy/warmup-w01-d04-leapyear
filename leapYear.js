const isLeapYear = function (year) {
     if(year % 4 === 0) {
         if(year % 100 === 0) {
             if(year % 400 === 0) {
                return true;
             }
             else {
                return false;
             } 
         }
        return true; 
     } else {
         return false;
     }
};

// Testing out the function: 
console.log(isLeapYear(1997));
console.log(isLeapYear(1996));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
let year = prompt('Year: ');
console.log(isLeapYear(year));