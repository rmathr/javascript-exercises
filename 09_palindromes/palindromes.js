const palindromes = function (string) {
    let lowerString = string.replace(/[/\s+.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase();
    let chars = '';
    for (let i = lowerString.length - 1; i >= 0 ; i--){
        chars += lowerString[i];
    }
    return chars === lowerString;
}    

// Do not edit below this line
module.exports = palindromes;
