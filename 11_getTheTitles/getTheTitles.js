const getTheTitles = function(obj) {
    const titlesArr = [];
    obj.map((item) => {
        titlesArr.push(item.title);
    })
    return titlesArr;
};

// Do not edit below this line
module.exports = getTheTitles;
