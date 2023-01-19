const fibonacci = function(num) {
    const fibonacciSeries = [1,1];
    num = +num;
    if(num < 0){
        return "OOPS";
    } else if(num == 0) {
        return fibonacciSeries[0];        
    } else if (num == 1){
        return fibonacciSeries[1];
    } else {
        for (let i = 1; i < num; i++){
            fibonacciSeries.push(fibonacciSeries[i-1]+fibonacciSeries[i]);
        }
    } return fibonacciSeries[num-1];  
};

// Do not edit below this line
module.exports = fibonacci;
