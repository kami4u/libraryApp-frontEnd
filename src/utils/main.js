const filterbooks = function (books, searchTerm) {
    return books.filter(function (book) {
        const title = book.title.toLowerCase().includes(searchTerm);
        const author = book.author.toLowerCase().includes(searchTerm);
        if (searchTerm === '') return;
        return title || author;
    });
};

module.exports = filterbooks;