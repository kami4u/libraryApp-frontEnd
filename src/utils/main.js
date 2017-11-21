const filterbooks = function (books, searchTerm) {
    return books.filter(function (book) {
        const lowerCaseBook = book.author.toLowerCase();
        if (searchTerm === '') return;
        return lowerCaseBook.includes(searchTerm) || book.author.includes(searchTerm);
    });
};

module.exports = filterbooks;