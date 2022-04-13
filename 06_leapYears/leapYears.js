const leapYears = function(year) {
    if (typeof (year) != 'number' || year < 0){
        return "ERROR";
    } else { 
        if (year%4 == 0){
            if (year%10 == 0){
                if (year%100 == 0 && year%400 == 0){
                    return true;
                }
                return false;
            } return true;
        } 
        return false; 
    } 
};

// Do not edit below this line
module.exports = leapYears;
