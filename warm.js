const isLeapYear = function(Theyear){
    let answer=" False ";
    let status ;
    if ((Theyear % 4 === 0)&&(Theyear % 400 === 0))
    {
        answer = " True ";
        status = true;
        if((status===true)&&(Theyear % 100 !== 0)) {
         
            answer = " True ";
    
    
        }
    
    
    
    
    }


    
    
    if (status===false){
    
        answer = " false  ";
    
    
    }
    
    return answer;
    };
    
    
    
    Theyear = prompt("please inter number ");
    console.log(isLeapYear(Theyear));
