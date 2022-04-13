const reverseString = function(string) {
    let originalString = string;
    const reversedString = [];
    for (i = 0; i<string.length; i++){
        reversedString.unshift(string[i]);
    }
    return reversedString.join("");
};

// Do not edit below this line
module.exports = reverseString;
