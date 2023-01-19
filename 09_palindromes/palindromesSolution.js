const palindromes = function (string) {
    let newString = string.match(/[^_\W]+/g).join('')
         .toLowerCase();
    const palindromeString = reverseString(newString);
    if(palindromeString == newString){
        return true;
    } else {
        return false;
    }
};

const reverseString = function(string) {
    const reversedString = [];
    for (i = 0; i<string.length; i++){
        reversedString.unshift(string[i]);
    }
    return reversedString.join("");
};


// Do not edit below this line
module.exports = palindromes;
