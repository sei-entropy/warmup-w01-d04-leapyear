const isLeapYear = function(Theyear){
    let answer=" False ";
    let status ;
    if ((Theyear % 4 === 0)||(Theyear % 100 !== 0))
    {
    
        answer = " True The year divisible by 4 and divisible by 100";
        status = true;
        if((status===true)&&(Theyear % 400 === 0)) {
         
            answer = " True The year divisible by 4 and 400 ";
    
    
        }
    
    
    
    
    }
    
    
    if (status===false){
    
        answer = " false  ";
    
    
    }
    
    return answer;
    };
    
    
    
    Theyear = prompt("please inter number ");
    console.log(isLeapYear(Theyear));