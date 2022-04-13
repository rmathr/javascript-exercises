const sumAll = function(num1, num2) {
    let sum = 0; 
    let i, j;
    let number1 = parseInt(num1);
    let number2 = parseInt(num2);
    if (number1 < number2){
        i = number1;
        j = number2;
    } else {
        i = number2;
        j = number1;
    } 
    if (number1 < 0 || number2 < 0 || typeof(num1) != 'number' || typeof(num2) != 'number' ){
        return "ERROR";
    } else {
        for (i; i<=j; i++){
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
