const removeFromArray = function(array, elem) {

};

// Do not edit below this line
module.exports = removeFromArray;



function myTest (array, ...arguments){
    let newArray = [];
    for ( let i = 0; i < array.length; i++){
        newArray.push(array[i]);
    }
    console.log(newArray);
    console.log(arguments);
}