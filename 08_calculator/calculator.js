function add(x,y){
  return x + y ;
}

function subtract(x,y){
  return x - y;
}

function sum(arr){
let arrSum = 0;
  arr.forEach( elem => {
    arrSum += elem; 
  });
  return arrSum;
}

function multiply(arr){
  let arrMult = 1;
  arr.forEach( elem => {
    arrMult *= elem;
  })
  return arrMult;
}

function power(x,y){
  let pow = 1;
  for (let i = 1; i <= y; i++){
    pow *= x;
  }
  return pow;
}

function factorial(num){
  if (num == 0 || num == 1){
    return 1;
  }
  let numFactorial = num;
  for (let i = num - 1; i > 0; i--){
    numFactorial *= i ; 
  }
  return numFactorial;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
