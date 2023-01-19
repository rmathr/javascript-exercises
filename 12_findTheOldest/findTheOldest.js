const findTheOldest = function(obj) {
    let sorting = obj.sort(function(a, b) {
        if(b.yearOfDeath === undefined){
            b.yearOfDeath = new Date().getFullYear();
        } else if (a.yearOfDeath === undefined){
            a.yearOfDeath = new Date().getFullYear();
        }
        return parseFloat(b.yearOfDeath - b.yearOfBirth) - parseFloat(a.yearOfDeath - a.yearOfBirth);
    });
    return sorting[0];
};

// Do not edit below this line
module.exports = findTheOldest;
