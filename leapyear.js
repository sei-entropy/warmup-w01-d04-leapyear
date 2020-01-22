const isLeapYear = function (year) {
    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 !== 0) {
            return false;
        }
        else {
            return true;
        }
    }

    return false;
};

const main = function () {
    let input = parseInt(prompt("Enter a year: "));
    alert(isLeapYear(input));
};

main();