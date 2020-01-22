const isLeapYear = function (year){
    let result = "true ";
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){

    //if ((year % 100 === 0) || (year % 400 === 0) || (year % 4 === 0)){
           console.log ("true");
    }else{
        console.log ("false");
    }

//     if ((year % 4 === 0) {
//     if ((year % 100 === 0) || (year % 400 === 0))){
//         console.log("true");
//     }
// }
}
isLeapYear(2000);