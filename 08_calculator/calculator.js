const add = function(x,y) {
	if(typeof x != 'number' || typeof y != 'number'){
    return "ERROR";
  } else {
    return x+y;
  }
};

const subtract = function(x,y) {
	if(typeof x != 'number' || typeof y != 'number'){
    return "ERROR";
  } else {
  return x - y;
}
};

const sum = function(arr) {
	if (!(Array.isArray(arr))){
    return "ERROR";
  } else {
    const sumResult = arr.reduce((total, num) => {
      return total + num;
    }, 0);
    return sumResult;
  }
};

const multiply = function(arr) {
  if (!(Array.isArray(arr))){
    return "ERROR";
  } else {
    const multiplyResult = arr.reduce((total, num) => {
      return total*num;
    }, 1);
    return multiplyResult;
  }
};

const power = function(x,y) {
	if(typeof x != 'number' || typeof y != 'number'){
    return "ERROR";
  } else {
    let powerResult = x;
    for (let i = 0; i < y-1; i++){
      powerResult *= x;
    }
    return powerResult;
  }
};

const factorial = function(x) {
	if(typeof x != 'number' || x < 0){
    return "ERROR";
  } else if (x == 0 || x == 1) {
    return 1;
    } else {
      let factorialResult = x;
      for(let i = 1; i < x; i++){
        factorialResult *= (x - i);
      }
      return factorialResult;
    }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
