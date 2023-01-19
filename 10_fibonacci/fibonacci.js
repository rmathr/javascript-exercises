const fibonacci = function(num) {
   let Fib = [0,1];
   if (num < 0){
    return "OOPS";
   } else if (num == 0){
    return 0;
   } else if (num == 1){
    return 1;
   } else {
        for (i = 2; i <= num; i++){
           Fib[i] = Fib[i-1] + Fib[i-2];
   }
   return Fib[num];      
};
}

// Do not edit below this line
module.exports = fibonacci;
