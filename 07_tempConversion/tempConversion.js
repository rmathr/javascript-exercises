const ftoc = function(tempf) {
  if (typeof (tempf) != 'number' || tempf < -459.67){
    return "ERROR";
  }
    let convertedTemp = ((tempf-32)*5/9);
    convertedTemp = +convertedTemp.toFixed(1);
    //console.log(typeof(convertedTemp));
    return convertedTemp;
};

const ctof = function(tempc) {
  if (typeof (tempc) != 'number' || tempc < -273.15){
    return "ERROR";
  }
    let convertedTemp = tempc*9/5 + 32;
    convertedTemp = +convertedTemp.toFixed(1);
    return convertedTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
