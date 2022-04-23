const getTheTitles = function(obj) {
    const bookTitlesList = [];
    const bookTitles = obj.map(book => {
        bookTitlesList.push(book.title);
    });
    return bookTitlesList;
};

// Do not edit below this line
module.exports = getTheTitles;
