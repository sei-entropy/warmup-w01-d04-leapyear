const isLeapYear = function(year){
    
    
        return (Number.isInteger(year / 4) && ! Number.isInteger(year / 100)) || Number.isInteger(year /400) ? 'true' : 'false';
      
    
    };
    isLeapYear(prompt("please enter a year."));






    // const isLeapYear = function(year){
    
    
        
    //     if(Number.isInteger(year / 4) && ! Number.isInteger(year /100) )
    //     {
    //         return true;
    //     } 
    //     else if(Number.isInteger(year /400)) {
    //         return true;
    //     } else{
    //         return false;
    //     }
    
    
    
    // };

    // isLeapYear(prompt("please enter a year."));