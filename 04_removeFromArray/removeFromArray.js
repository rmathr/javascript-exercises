const removeFromArray = function(array, ...args) {
    let resultArray = array;
    //let args = arguments;
    for (let i = 0; i< args.length; i++){
        let value = args[i];    
        resultArray = resultArray.filter(item => item !== value)
    }
    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;



// function myTest (array, ...arguments){
//     let newArray = [];
//     for ( let i = 0; i < array.length; i++){
//         newArray.push(array[i]);
//     }
//     console.log(newArray);
//     console.log(arguments);
// }