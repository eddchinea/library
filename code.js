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


// Display books in books container

// Define books container
const booksContainer = document.querySelector('.books-container');

function addBookCardToPage () {
    library.forEach(book => {
        //Book card
        const bookDiv = document.createElement('div');
        const bookTitle = document.createElement('h4');
        const bookAuthor = document.createElement('p');
        const bookPages = document.createElement('p');
        const readStatus = document.createElement('p');
    
        //Add classes to each book element
        bookDiv.classList.add('book');
        bookTitle.classList.add('book-title');
        bookAuthor.classList.add('book-author');
        bookPages.classList.add('book-pages');
        readStatus.classList.add('book-read');
    
        //Add content for each book element
        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages;
        readStatus.textContent = book.read;
    
        // Append each book element to the book card
        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookPages);
        bookDiv.appendChild(readStatus);
    
        //Append the book card to the books container
        booksContainer.appendChild(bookDiv);
    })
}

addBookCardToPage();