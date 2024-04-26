const library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

function addBookToLibrary (book) {
    library.push(book);
}

// Example books:
const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
const book2 = new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 398, 'read');
const book3 = new Book('The Two Towers', 'J.R.R. Tolkien', 327, 'read');

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

