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
// const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read');
// const book2 = new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 398, 'read');
// const book3 = new Book('The Two Towers', 'J.R.R. Tolkien', 327, 'read');

// addBookToLibrary(book1);
// addBookToLibrary(book2);
// addBookToLibrary(book3);


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
        const removeButton = document.createElement('button');
    
        //Add classes to each book element
        bookDiv.classList.add('book');
        bookTitle.classList.add('book-title');
        bookAuthor.classList.add('book-author');
        bookPages.classList.add('book-pages');
        readStatus.classList.add('book-read');
        removeButton.classList.add('remove-book');
    
        //Add content for each book element
        bookTitle.textContent = book.title;
        bookAuthor.textContent = `- Author: ${book.author}`;
        bookPages.textContent = `- ${book.pages} pages`;
        readStatus.textContent = book.read;
        removeButton.textContent = 'Remove';

        // Add event listener to remove button
        removeButton.addEventListener('click', () => {
            library.splice(library.indexOf(book), 1);
            booksContainer.removeChild(bookDiv);
        });
        // Append each book element to the book card
        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookPages);
        bookDiv.appendChild(readStatus);
        bookDiv.appendChild(removeButton);
    
        //Append the book card to the books container
        booksContainer.appendChild(bookDiv);
    })
}

// Add book section
const addBookBtn = document.querySelector('.add-book')
const addBookModal = document.querySelector('.add-book-modal');
const submitBook = document.querySelector('.submit-book');

addBookBtn.addEventListener('click', () => {
    addBookModal.showModal();
})

submitBook.addEventListener('click', (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read-status').value;

    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    addBookCardToPage();
    addBookModal.close();
})